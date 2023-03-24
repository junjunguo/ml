import { SupportedModels } from "@tensorflow-models/face-detection";

export const NUM_KEYPOINTS = 6;
export const GREEN = "#32EEDB";
export const RED = "#FF2C35";
export const BLUE = "#157AB3";

export const VIDEO_SIZE = {
  "640x480": { width: 640, height: 480 },
  "640x360": { width: 640, height: 360 },
  "360x270": { width: 360, height: 270 },
};

export const MEDIAPIPE_FACE_CONFIG = {
  maxFaces: 1,
  boundingBox: true,
  keypoints: true,
  modelType: "short",
};

/**
 * This map descripes tunable flags and theior corresponding types.
 *
 * The flags (keys) in the map satisfy the following two conditions:
 * - Is tunable. For example, `IS_BROWSER` and `IS_CHROME` is not tunable,
 * because they are fixed when running the scripts.
 * - Does not depend on other flags when registering in `ENV.registerFlag()`.
 * This rule aims to make the list streamlined, and, since there are
 * dependencies between flags, only modifying an independent flag without
 * modifying its dependents may cause inconsistency.
 * (`WEBGL_RENDER_FLOAT32_CAPABLE` is an exception, because only exposing
 * `WEBGL_FORCE_F16_TEXTURES` may confuse users.)
 */
export const TUNABLE_FLAG_VALUE_RANGE_MAP = {
  WEBGL_VERSION: [1, 2],
  WASM_HAS_SIMD_SUPPORT: [true, false],
  WASM_HAS_MULTITHREAD_SUPPORT: [true, false],
  WEBGL_CPU_FORWARD: [true, false],
  WEBGL_PACK: [true, false],
  WEBGL_FORCE_F16_TEXTURES: [true, false],
  WEBGL_RENDER_FLOAT32_CAPABLE: [true, false],
  WEBGL_FLUSH_THRESHOLD: [-1, 0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  CHECK_COMPUTATION_FOR_ERRORS: [true, false],
};

export const BACKEND_FLAGS_MAP = {
  "tfjs-wasm": ["WASM_HAS_SIMD_SUPPORT", "WASM_HAS_MULTITHREAD_SUPPORT"],
  "tfjs-webgl": [
    "WEBGL_VERSION",
    "WEBGL_CPU_FORWARD",
    "WEBGL_PACK",
    "WEBGL_FORCE_F16_TEXTURES",
    "WEBGL_RENDER_FLOAT32_CAPABLE",
    "WEBGL_FLUSH_THRESHOLD",
  ],
  "tfjs-webgpu": [],
  "mediapipe-gpu": [],
};

export const MODEL_BACKEND_MAP = {
  [SupportedModels.MediaPipeFaceDetector]: [
    "mediapipe-gpu",
    "tfjs-webgl",
    "tfjs-webgpu",
  ],
} as const;

export const TUNABLE_FLAG_NAME_MAP = {
  PROD: "production mode",
  WEBGL_VERSION: "webgl version",
  WASM_HAS_SIMD_SUPPORT: "wasm SIMD",
  WASM_HAS_MULTITHREAD_SUPPORT: "wasm multithread",
  WEBGL_CPU_FORWARD: "cpu forward",
  WEBGL_PACK: "webgl pack",
  WEBGL_FORCE_F16_TEXTURES: "enforce float16",
  WEBGL_RENDER_FLOAT32_CAPABLE: "enable float32",
  WEBGL_FLUSH_THRESHOLD: "GL flush wait time(ms)",
};

// ^ to be removed ^

/**
 * tfhub.dev
 */
export const tfHubUrls = {
  /**
   * https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1
   *
   * Single-Shot multibox Detection (SSD)
   */
  faceDetection:
    "https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1",
};

export const graphModels: Record<string, { root: string; model: string }> = {
  /**
   * Source: https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1
   * face_detection/short
   */
  faceDetection: {
    root: "tfjs-model_face_detection_short_1",
    model: "tfjs-model_face_detection_short_1/model.json",
  },
} as const;
