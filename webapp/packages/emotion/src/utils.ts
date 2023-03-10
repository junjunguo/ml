import { browser, type Tensor, type Tensor3D } from "@tensorflow/tfjs";

import { modelInputImg2Dshape } from "./constants";

export const processImgDt = (
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number
): Tensor => {
  return browser
    .fromPixels(imgDt, numChannels)
    .resizeBilinear([...modelInputImg2Dshape])
    .div(255);
};

export const tensorToPixels = async (
  canvas: HTMLCanvasElement,
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number
): Promise<Uint8ClampedArray> =>
  await browser.toPixels(processImgDt(imgDt, numChannels) as Tensor3D, canvas);
