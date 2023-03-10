import { type GraphModel, loadGraphModel, type Tensor } from "@tensorflow/tfjs";

import { graphModelUrl } from "./constants";
import { processImgDt } from "./utils";

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

  return Array.from(
    (
      PARAMS.model?.predict(
        processImgDt(imgDt, numChannels).reshape([-1, 48, 48, 3]).toFloat()
      ) as Tensor
    ).dataSync()
  );
};

// export const runEmotionDetection = async (
//   imgDt:
//     | ImageData
//     | HTMLImageElement
//     | HTMLCanvasElement
//     | HTMLVideoElement
//     | ImageBitmap,
//   numChannels?: number
// ): Promise<number[]> => {
//   if (PARAMS.model == null) PARAMS.model = await loadGraphModel(graphModelUrl);

//   return Array.from(
//     (
//       PARAMS.model?.predict(
//         processImgDt(imgDt, numChannels).reshape([-1, 48, 48, 3]).toFloat()
//       ) as Tensor
//     ).dataSync()
//   );
// };
