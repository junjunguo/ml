import {
  browser,
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
): Promise<Tensor | Tensor[] | NamedTensorMap> => {
  if (PARAMS.model == null) PARAMS.model = await loadGraphModel(MODEL_URL);

  return PARAMS.model.predict(browser.fromPixels(pixels));
};

export const runEmotionDetection = async () => {
  // For Keras use tf.loadLayersModel().
  const model = await loadGraphModel(MODEL_URL);
  console.log("model version: ", model.modelVersion);
  console.log("model nodes: ", model.outputNodes);
  const cat = document.getElementById("cat");
  // model.predict(browser.fromPixels(cat));
};
