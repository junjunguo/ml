import { VERSION as MP_FD_V } from "@mediapipe/face_detection";
import {
  engine,
  env,
  findBackendFactory,
  registerBackend,
  removeBackend,
  setBackend,
} from "@tensorflow/tfjs-core";
import {
  createDetector,
  type Face,
  type FaceDetector,
  SupportedModels,
} from "@tensorflow-models/face-detection";
import { type MediaPipeFaceDetectorModelType } from "@tensorflow-models/face-detection/dist/mediapipe/types";

import {
  GREEN,
  MODEL_BACKEND_MAP,
  NUM_KEYPOINTS,
  RED,
  TUNABLE_FLAG_VALUE_RANGE_MAP,
  type VIDEO_SIZE,
} from "./constants";
import { type BackendTypes } from "./types";

export const STATE: {
  camera: { targetFPS: number; sizeOption: keyof typeof VIDEO_SIZE };
  backend: BackendTypes | string;
  flags?: any;
  modelConfig: {
    modelType?: MediaPipeFaceDetectorModelType;
    maxFaces?: number;
    boundingBox?: boolean;
    keypoints?: boolean;
  };
  lastTFJSBackend?: BackendTypes | string;
  isModelChanged?: boolean;
} = {
  camera: { targetFPS: 60, sizeOption: "640x480" },
  backend: MODEL_BACKEND_MAP[SupportedModels.MediaPipeFaceDetector][0],
  modelConfig: {
    boundingBox: true,
    keypoints: true,
  },
};

export const createFaceDetector = async (): Promise<
  FaceDetector | undefined
> => {
  const runtime = STATE.backend.split("-")[0];
  if (runtime === "mediapipe") {
    return await createDetector(SupportedModels.MediaPipeFaceDetector, {
      runtime,
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@${MP_FD_V}`,
      ...STATE.modelConfig,
    });
  } else if (runtime === "tfjs") {
    return await createDetector(SupportedModels.MediaPipeFaceDetector, {
      runtime,
      ...STATE.modelConfig,
    });
  }

  // todo remove this ?
  return await createDetector(SupportedModels.MediaPipeFaceDetector, {
    runtime: "tfjs",
    ...STATE.modelConfig,
  });
};

/**
 * Reset the target backend.
 *
 * @param backendName The name of the backend to be reset.
 */
const resetBackend = async (
  backendName: BackendTypes | string
): Promise<void> => {
  const ENGINE = engine();
  if (!(backendName in ENGINE.registryFactory)) {
    if (backendName === "webgpu") {
      alert(
        "webgpu backend is not registered. Your browser may not support WebGPU yet. To test this backend, please use a supported browser, e.g. Chrome canary with --enable-unsafe-webgpu flag"
      );
      STATE.backend =
        STATE.lastTFJSBackend != null ? STATE.lastTFJSBackend : "tfjs-webgl";
      //   showBackendConfigs();
      return;
    } else {
      throw new Error(`${backendName} backend is not registered.`);
    }
  }

  if (backendName in ENGINE.registry) {
    const backendFactory = findBackendFactory(backendName);
    removeBackend(backendName);
    registerBackend(backendName, backendFactory);
  }

  await setBackend(backendName);
  STATE.lastTFJSBackend = `tfjs-${backendName}`;
};

/**
 * Set environment flags.
 *
 * This is a wrapper function of `tf.env().setFlags()` to constrain users to
 * only set tunable flags (the keys of `TUNABLE_FLAG_TYPE_MAP`).
 *
 * ```js
 * const flagConfig = {
 *        WEBGL_PACK: false,
 *      };
 * await setEnvFlags(flagConfig);
 *
 * console.log(tf.env().getBool('WEBGL_PACK')); // false
 * console.log(tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS')); // false
 * ```
 *
 * @param flagConfig An object to store flag-value pairs.
 */
export const setBackendAndEnvFlags = async (
  flagConfig: any,
  backend: BackendTypes | string
): Promise<void> => {
  if (flagConfig == null) {
    return;
  } else if (typeof flagConfig !== "object") {
    throw new Error(
      `An object is expected, while a(n) ${typeof flagConfig} is found.`
    );
  }

  // Check the validation of flags and values.
  for (const flag in flagConfig) {
    // TODO: check whether flag can be set as flagConfig[flag].
    if (!(flag in TUNABLE_FLAG_VALUE_RANGE_MAP)) {
      throw new Error(`${flag} is not a tunable or valid environment flag.`);
    }
    // if (TUNABLE_FLAG_VALUE_RANGE_MAP[flag].indexOf(flagConfig[flag]) === -1) {
    //   throw new Error(
    //     `${flag} value is expected to be in the range [${TUNABLE_FLAG_VALUE_RANGE_MAP[flag]}], while ${flagConfig[flag]}` +
    //       " is found."
    //   );
    // }
  }

  env().setFlags(flagConfig);

  const [runtime, $backend] = backend.split("-");

  if (runtime === "tfjs") {
    await resetBackend($backend);
  }
};

export const drawPath = (
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  closePath: boolean
): void => {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
};

/**
 * Draw the keypoints on the video.
 * @param ctx 2D rendering context.
 * @param faces A list of faces to render.
 * @param boundingBox Whether or not to display the bounding box.
 * @param showKeypoints Whether or not to display the keypoints.
 */
export const drawResults = (
  ctx: CanvasRenderingContext2D,
  faces: Face[],
  boundingBox: boolean,
  showKeypoints: boolean
): void => {
  faces.forEach((face) => {
    const keypoints = face.keypoints.map((keypoint) => [
      keypoint.x,
      keypoint.y,
    ]);

    if (boundingBox) {
      ctx.strokeStyle = RED;
      ctx.lineWidth = 1;

      const box = face.box;
      drawPath(
        ctx,
        [
          [box.xMin, box.yMin],
          [box.xMax, box.yMin],
          [box.xMax, box.yMax],
          [box.xMin, box.yMax],
        ],
        true
      );
    }

    if (showKeypoints) {
      ctx.fillStyle = GREEN;

      for (let i = 0; i < NUM_KEYPOINTS; i++) {
        const x = keypoints[i][0];
        const y = keypoints[i][1];

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  });
};

export const runtimeParams: {
  detector?: FaceDetector;
  startInferenceTime?: number;
  rafId?: number;
  numInferences: number;
  inferenceTimeSum: number;
  lastPanelUpdate: number;
  video?: HTMLVideoElement;
  ctx?: CanvasRenderingContext2D;
} = {
  numInferences: 0,
  inferenceTimeSum: 0,
  lastPanelUpdate: 0,
};

// async function checkGuiUpdate() {
//   if (STATE.isTargetFPSChanged || STATE.isSizeOptionChanged) {
//     camera = await Camera.setupCamera(STATE.camera);
//     STATE.isTargetFPSChanged = false;
//     STATE.isSizeOptionChanged = false;
//   }

//   if (STATE.isModelChanged || STATE.isFlagChanged || STATE.isBackendChanged) {
//     STATE.isModelChanged = true;

//     window.cancelAnimationFrame(rafId);

//     if (detector != null) {
//       detector.dispose();
//     }

//     if (STATE.isFlagChanged || STATE.isBackendChanged) {
//       await setBackendAndEnvFlags(STATE.flags, STATE.backend);
//     }

//     try {
//       detector = await createDetector(STATE.model);
//     } catch (error) {
//       detector = null;
//       alert(error);
//     }

//     STATE.isFlagChanged = false;
//     STATE.isBackendChanged = false;
//     STATE.isModelChanged = false;
//   }
// }

export const beginEstimateFaceStats = (): void => {
  runtimeParams.startInferenceTime = Date.now();
};

export const endEstimateFaceStats = (): void => {
  const endInferenceTime = Date.now();
  runtimeParams.inferenceTimeSum +=
    endInferenceTime - (runtimeParams.startInferenceTime ?? 0);
  runtimeParams.numInferences++;

  const panelUpdateMilliseconds = 1000;
  if (
    endInferenceTime - runtimeParams.lastPanelUpdate >=
    panelUpdateMilliseconds
  ) {
    // const averageInferenceTime = runtimeParams.inferenceTimeSum / runtimeParams.numInferences;
    runtimeParams.inferenceTimeSum = 0;
    runtimeParams.numInferences = 0;
    // stats.customFpsPanel.update(
    //     1000.0 / averageInferenceTime, 120 /* maxValue */);
    runtimeParams.lastPanelUpdate = endInferenceTime;
  }
};

const drawCtx = (): void => {
  if (runtimeParams.ctx == null || runtimeParams.video == null) return;
  runtimeParams.ctx.drawImage(
    runtimeParams.video,
    0,
    0,
    runtimeParams.video.videoWidth,
    runtimeParams.video.videoHeight
  );
};

export const renderResult = async (): Promise<void> => {
  if (runtimeParams.video == null) return;

  if (runtimeParams.video.readyState < 2) {
    await new Promise((resolve) => {
      if (runtimeParams.video != null)
        runtimeParams.video.onloadeddata = () => {
          resolve(runtimeParams.video);
        };
    });
  }

  let faces = null;

  // Detector can be null if initialization failed (for example when loading
  // from a URL that does not exist).
  if (runtimeParams.detector != null) {
    // FPS only counts the time it takes to finish estimateFaces.
    beginEstimateFaceStats();

    // Detectors can throw errors, for example when using custom URLs that
    // contain a model that doesn't provide the expected output.
    try {
      faces = await runtimeParams.detector.estimateFaces(runtimeParams.video, {
        flipHorizontal: false,
      });
    } catch (error) {
      runtimeParams.detector.dispose();
      runtimeParams.detector = undefined;
      alert(error);
    }

    endEstimateFaceStats();
  }

  drawCtx();

  // The null check makes sure the UI is not in the middle of changing to a
  // different model. If during model change, the result is from an old model,
  // which shouldn't be rendered.
  if (
    runtimeParams.ctx != null &&
    faces != null &&
    faces.length > 0 &&
    !(STATE.isModelChanged ?? false)
  ) {
    drawResults(
      runtimeParams.ctx,
      faces,
      STATE.modelConfig.boundingBox ?? false,
      STATE.modelConfig.keypoints ?? false
    );
  }
};

export const renderPrediction = async (): Promise<void> => {
  //   await checkGuiUpdate();

  //   if (!STATE.isModelChanged) {
  await renderResult();
  //   }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  runtimeParams.rafId = requestAnimationFrame(renderPrediction);
};

export const runFaceDetecter = async (
  video: HTMLVideoElement,
  ctx: CanvasRenderingContext2D
): Promise<void> => {
  await setBackendAndEnvFlags(STATE.flags, STATE.backend);
  runtimeParams.ctx = ctx;
  runtimeParams.video = video;
  runtimeParams.detector = await createFaceDetector();
  await renderPrediction();
};
