import { type Detection } from "@mediapipe/face_detection";
import {
  browser,
  dispose,
  expandDims,
  getBackend,
  type GraphModel,
  image,
  loadGraphModel,
  setBackend,
  type Tensor3D,
  tidy,
} from "@tensorflow/tfjs";
import { detectionProjection } from "@tensorflow-models/face-detection/dist/shared/calculators/detection_projection";
import { detectorResult } from "@tensorflow-models/face-detection/dist/shared/calculators/detector_result";
import { nonMaxSuppression } from "@tensorflow-models/face-detection/dist/shared/calculators/non_max_suppression";
import { tensorsToDetections } from "@tensorflow-models/face-detection/dist/shared/calculators/tensors_to_detections";
import * as fdConstants from "@tensorflow-models/face-detection/dist/tfjs/constants";

import { graphModels } from "./constants";

const PARAMS: {
  model?: GraphModel;
} = {};

// const calculateMaxScores = (
//   scores: Float32Array,
//   numBoxes: number,
//   numClasses: number
// ): [number[], number[]] => {
//   const maxes = [];
//   const classes = [];
//   for (let i = 0; i < numBoxes; i++) {
//     let max = Number.MIN_VALUE;
//     let index = -1;
//     for (let j = 0; j < numClasses; j++) {
//       if (scores[i * numClasses + j] > max) {
//         max = scores[i * numClasses + j];
//         index = j;
//       }
//     }
//     maxes[i] = max;
//     classes[i] = index;
//   }
//   return [maxes, classes];
// };

export interface DetectedObject {
  bbox: [number, number, number, number]; // [x, y, width, height]
  class: string;
  score: number;
}

// const buildDetectedObjects = (
//   width: number,
//   height: number,
//   boxes: Float32Array,
//   scores: number[],
//   indexes: Float32Array,
//   classes: number[]
// ): DetectedObject[] => {
//   const count = indexes.length;
//   const objects: DetectedObject[] = [];
//   for (let i = 0; i < count; i++) {
//     const bbox = [];
//     for (let j = 0; j < 4; j++) {
//       bbox[j] = boxes[indexes[i] * 4 + j];
//     }
//     const minY = bbox[0] * height;
//     const minX = bbox[1] * width;
//     const maxY = bbox[2] * height;
//     const maxX = bbox[3] * width;
//     bbox[0] = minX;
//     bbox[1] = minY;
//     bbox[2] = maxX - minX;
//     bbox[3] = maxY - minY;
//     objects.push({
//       bbox: bbox as [number, number, number, number],
//       class: CLASSES[classes[indexes[i]] + 1].displayName,
//       score: scores[indexes[i]],
//     });
//   }
//   return objects;
// };

// export const detectorResult = (
//   detectionResult: Tensor3D
// ): { boxes: Tensor2D; logits: Tensor1D } =>
//   tidy(() => {
//     const [logits, rawBoxes] = splitDetectionResult(detectionResult);
//     // Shape [896, 12]
//     const rawBoxes2d = squeeze(rawBoxes);
//     // Shape [896]
//     const logits1d = squeeze(logits);

//     return { boxes: rawBoxes2d as Tensor2D, logits: logits1d as Tensor1D };
//   });

// export const splitDetectionResult = (
//   detectionResult: Tensor3D
// ): [Tensor3D, Tensor3D] =>
//   tidy(() => {
//     // logit is stored in the first element in each anchor data.
//     const logits = slice(detectionResult, [0, 0, 0], [1, -1, 1]);
//     // Bounding box coords are stored in the next four elements for each anchor
//     // point.
//     const rawBoxes = slice(detectionResult, [0, 0, 1], [1, -1, -1]);

//     return [logits, rawBoxes];
//   });

/**
 * @param maxFaces The maximum number of bounding boxes of detected
 * objects. There can be multiple objects of the same class, but at different
 * locations. Defaults to 1.
 * @param minScore The minimum score of the returned bounding boxes
 * of detected objects. Value between 0 and 1. Defaults to 0.5.
 */
export const faceDetectionShortV1 = async (
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number,
  maxFaces: number = 1,
  minScore: number = 0.5
): Promise<void> => {
  if (PARAMS.model == null) {
    PARAMS.model = await loadGraphModel(graphModels.faceDetection.model, {
      weightPathPrefix: `${import.meta.env.BASE_URL}${
        graphModels.faceDetection.root
      }/`,
    });
  }

  const batched = tidy(() => {
    const img = browser.fromPixels(imgDt, numChannels);
    const exD = expandDims(image.resizeBilinear(img, [128, 128]));
    return exD;
  });

  // example: batched.shape: [1, 128, 128, 3]
  const width = batched.shape[1]!;
  const height = batched.shape[2]!;

  // model returns two tensors: [1, 896, 17]
  const result = (await PARAMS.model?.executeAsync(batched)) as Tensor3D;

  // FaceDetectionShort/FullRangeModelCpu: InferenceCalculator
  // The model returns a tensor with the following shape:
  // [1 (batch), 896 (anchor points), 17 (data for each anchor)]
  const { boxes, logits } = detectorResult(result);
  // FaceDetectionShort/FullRangeModelCpu: TensorsToDetectionsCalculator
  const unfilteredDetections: Detection[] = await tensorsToDetections([
    logits,
    boxes,
  ]);

  // if (unfilteredDetections.length === 0) {
  //   dispose([image3d, inputTensors, detectionResult, logits, boxes]);
  //   return unfilteredDetections;
  // }

  // FaceDetectionShort/FullRangeModelCpu: NonMaxSuppressionCalculator
  const filteredDetections = await nonMaxSuppression(
    unfilteredDetections,
    maxFaces,
    fdConstants.DETECTOR_NON_MAX_SUPPRESSION_CONFIG.minSuppressionThreshold,
    fdConstants.DETECTOR_NON_MAX_SUPPRESSION_CONFIG.overlapType
  );

  const detections =
    // FaceDetectionShortRangeModelCpu:
    // DetectionProjectionCalculator
    detectionProjection(filteredDetections, transformMatrix);

  tf.dispose([image3d, inputTensors, detectionResult, logits, boxes]);

  // const boxes = resultData as Float32Array;

  // clean the webgl tensors
  batched.dispose();
  dispose(boxes);

  // const [maxScores, classes] = calculateMaxScores(
  //   scores,
  //   boxClassifictionScore.shape[1]!,
  //   boxClassifictionScore.shape[2]!
  // );

  const prevBackend = getBackend();
  // run post process in cpu
  if (getBackend() === "webgl") {
    await setBackend("cpu");
  }
  // const indexTensor = tidy(() => {
  //   const boxes2 = tensor2d(boxes, [
  //     result.shape[1]!,
  //     boxLocation.shape[3]!,
  //   ]);
  //   return image.nonMaxSuppression(
  //     boxes2,
  //     maxScores,
  //     maxNumBoxes,
  //     minScore,
  //     minScore
  //   );
  // });

  // const indexes = indexTensor.dataSync() as Float32Array;
  // indexTensor.dispose();

  // restore previous backend
  if (prevBackend !== getBackend()) {
    await setBackend(prevBackend);
  }

  //   return buildDetectedObjects(
  //     width,
  //     height,
  //     boxes,
  //     maxScores,
  //     indexes,
  //     classes
  //   );
};
