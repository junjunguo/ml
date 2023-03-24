import {
  browser,
  dispose,
  expandDims,
  getBackend,
  type GraphModel,
  image,
  loadGraphModel,
  setBackend,
  type Tensor,
  tensor2d,
  tidy,
} from "@tensorflow/tfjs";

import { CLASSES } from "./classes";
import { graphModelRoot, graphModelUrl } from "./constants";

const PARAMS: {
  model?: GraphModel;
} = {};

const calculateMaxScores = (
  scores: Float32Array,
  numBoxes: number,
  numClasses: number
): [number[], number[]] => {
  const maxes = [];
  const classes = [];
  for (let i = 0; i < numBoxes; i++) {
    let max = Number.MIN_VALUE;
    let index = -1;
    for (let j = 0; j < numClasses; j++) {
      if (scores[i * numClasses + j] > max) {
        max = scores[i * numClasses + j];
        index = j;
      }
    }
    maxes[i] = max;
    classes[i] = index;
  }
  return [maxes, classes];
};

export interface DetectedObject {
  bbox: [number, number, number, number]; // [x, y, width, height]
  class: string;
  score: number;
}

const buildDetectedObjects = (
  width: number,
  height: number,
  boxes: Float32Array,
  scores: number[],
  indexes: Float32Array,
  classes: number[]
): DetectedObject[] => {
  const count = indexes.length;
  const objects: DetectedObject[] = [];
  for (let i = 0; i < count; i++) {
    const bbox = [];
    for (let j = 0; j < 4; j++) {
      bbox[j] = boxes[indexes[i] * 4 + j];
    }
    const minY = bbox[0] * height;
    const minX = bbox[1] * width;
    const maxY = bbox[2] * height;
    const maxX = bbox[3] * width;
    bbox[0] = minX;
    bbox[1] = minY;
    bbox[2] = maxX - minX;
    bbox[3] = maxY - minY;
    objects.push({
      bbox: bbox as [number, number, number, number],
      class: CLASSES[classes[indexes[i]] + 1].displayName,
      score: scores[indexes[i]],
    });
  }
  return objects;
};

/**
 * @param maxNumBoxes The maximum number of bounding boxes of detected
 * objects. There can be multiple objects of the same class, but at different
 * locations. Defaults to 20.
 * @param minScore The minimum score of the returned bounding boxes
 * of detected objects. Value between 0 and 1. Defaults to 0.5.
 */
export const ssdMobileNetV2 = async (
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number,
  maxNumBoxes: number = 20,
  minScore: number = 0.5
): Promise<DetectedObject[]> => {
  if (PARAMS.model == null) {
    PARAMS.model = await loadGraphModel(graphModelUrl, {
      weightPathPrefix: `${import.meta.env.BASE_URL}${graphModelRoot}/`,
    });
  }

  // PARAMS.model = await loadGraphModel(tfHubUrl, {
  //   fromTFHub: true,
  // });

  const batched = tidy(() => {
    const img = browser.fromPixels(imgDt, numChannels);
    // console.log("img shap ", img.shape);
    // Reshape to a single-element batch so we can pass it to executeAsync. see reshape([1, 360, 360, 3])
    const exD = expandDims(img);
    // console.log("exd shap ", exD.shape);

    return exD;
  });

  // const width = imgDt.height;
  // const height = imgDt.width;
  // example: batched.shape: [1, 360, 360, 3]
  const width = batched.shape[1]!;
  const height = batched.shape[2]!;

  // model returns two tensors:
  // 1. box classification score with shape of [1, 1917, 90]
  // 2. box location with shape of [1, 1917, 1, 4]
  // where 1917 is the number of box detectors, 90 is the number of classes.
  // and 4 is the four coordinates of the box.
  const [boxClassifictionScore, boxLocation]: Tensor[] =
    (await PARAMS.model?.executeAsync(
      batched
      // browser.fromPixels(imgDt, numChannels).reshape([1, 360, 360, 3])
    )) as Tensor[];

  // console.log("box classifiction score:", boxClassifictionScore.shape);
  // console.log("box location:", boxLocation.shape);

  const scores = (await boxClassifictionScore.data()) as Float32Array;
  const boxes = (await boxLocation.data()) as Float32Array;

  // clean the webgl tensors
  batched.dispose();
  dispose(boxClassifictionScore);
  dispose(boxLocation);

  const [maxScores, classes] = calculateMaxScores(
    scores,
    boxClassifictionScore.shape[1]!,
    boxClassifictionScore.shape[2]!
  );

  const prevBackend = getBackend();
  // run post process in cpu
  if (getBackend() === "webgl") {
    await setBackend("cpu");
  }
  const indexTensor = tidy(() => {
    const boxes2 = tensor2d(boxes, [
      boxLocation.shape[1]!,
      boxLocation.shape[3]!,
    ]);
    return image.nonMaxSuppression(
      boxes2,
      maxScores,
      maxNumBoxes,
      minScore,
      minScore
    );
  });

  const indexes = indexTensor.dataSync() as Float32Array;
  indexTensor.dispose();

  // restore previous backend
  if (prevBackend !== getBackend()) {
    await setBackend(prevBackend);
  }

  return buildDetectedObjects(
    width,
    height,
    boxes,
    maxScores,
    indexes,
    classes
  );
};
