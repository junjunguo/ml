import { type SupportedModels } from "@tensorflow-models/face-detection";

import { type MODEL_BACKEND_MAP } from "./constants";
export type BackendTypes =
  (typeof MODEL_BACKEND_MAP)[SupportedModels.MediaPipeFaceDetector][number];
