import {
  browser,
  type GraphModel,
  loadGraphModel,
  type Tensor,
} from "@tensorflow/tfjs";

import { graphModelUrl, modelInputImg2Dshape } from "./constants";

const PARAMS: {
  model?: GraphModel;
} = {};

export const predictEmotion = async (
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number
): Promise<number[]> => {
  if (PARAMS.model == null) PARAMS.model = await loadGraphModel(graphModelUrl);

  // console.log(PARAMS.model?.modelVersion);
  let tensor = browser
    .fromPixels(imgDt)
    .resizeBilinear([...modelInputImg2Dshape])
    .div(255);
  // console.log(tensor.shape);
  tensor = tensor.reshape([-1, 48, 48, 3]);
  // console.log(tensor.shape);
  const r = PARAMS.model?.predict(tensor.toFloat(), { verbose: true });
  // console.log("R: ", r);
  const tr = r as Tensor;
  const tv = tr.dataSync();
  // console.log("tv ", tv);

  return Array.from(tv);
};

export const runEmotionDetection = async (): Promise<void> => {
  // For Keras use tf.loadLayersModel().
  const model = await loadGraphModel(graphModelUrl);
  console.log("model version: ", model.modelVersion);
  console.log("model nodes: ", model.outputNodes);
  // model.predict(browser.fromPixels(cat));
};
