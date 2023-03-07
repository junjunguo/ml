import {
  browser,
  env,
  getBackend,
  type GraphModel,
  loadGraphModel,
  type NamedTensorMap,
  type Tensor,
} from "@tensorflow/tfjs";

const MODEL_URL = "emotion_detection.json";

const PARAMS: {
  model?: GraphModel;
} = {};

export const predictEmotion = async (
  pixels:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number
): Promise<void> => {
  console.log("backend", getBackend());
  console.log("env", env());

  const model = await loadGraphModel(MODEL_URL); // TypeError: env(...).platform.isTypedArray is not a function

  console.log("model version: ", model.modelVersion);
  console.log("model nodes: ", model.outputNodes);

  // return PARAMS.model.predict(browser.fromPixels(pixels));
};

export const runEmotionDetection = async () => {
  // For Keras use tf.loadLayersModel().
  const model = await loadGraphModel(MODEL_URL);
  console.log("model version: ", model.modelVersion);
  console.log("model nodes: ", model.outputNodes);
  // model.predict(browser.fromPixels(cat));
};
