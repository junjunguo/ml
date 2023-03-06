import { browser, loadGraphModel, model, models } from "@tensorflow/tfjs";

export const runEmotionDetection = async () => {
  const MODEL_URL = "emotion_detection.json";

  // For Keras use tf.loadLayersModel().
  const model = await loadGraphModel(MODEL_URL);
  console.log("model version: ", model.modelVersion);
  console.log("model nodes: ", model.outputNodes);
  // const cat = document.getElementById("cat");
  // model.predict(browser.fromPixels(cat));
};
