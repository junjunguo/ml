import "./objectDetectionPage.scss";

import { ImgElement } from "@jj/visualize";
import * as tf from "@tensorflow/tfjs";
import React, { type ChangeEvent, type FC, useState } from "react";

import { Nav } from "../../nav/Nav";

// const model: tf.GraphModel | null = null;

/** TODO
 * Source: TF hub
 * https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1
 */
const objDetection = async (
  imgDt:
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap,
  numChannels?: number
): Promise<void> => {
  // const modelUrl =
  //   "https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json";
  // const model = await tf.loadGraphModel(modelUrl);

  const modelUrl =
    "https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2";
  const model = await tf.loadGraphModel(modelUrl, { fromTFHub: true });
  const zeros = tf.zeros([1, 224, 224, 3]);
  const mpz = model.predict(zeros);
  console.log("mpz: ", mpz);
  const aT = mpz as tf.Tensor;
  aT.print();
  const tv = aT.dataSync();
  console.log("tensorflow data: ", tv);

  // OK ^

  // if (model == null)
  //   model = await tf.loadGraphModel(
  //     "https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1",
  //     { fromTFHub: true }
  //   );

  // const zeros = tf.zeros([1, 224, 224, 3]);
  // const zr = model.predict(zeros);
  // console.log("zr: ", zr);
  // (zr as tf.Tensor).print();

  // console.log(model?.modelVersion);
  // let tensor = tf.browser.fromPixels(imgDt);
  // // tensor = tensor.div(255);
  // const td = await tensor.data();
  // console.log("tensor.data[0]", td[0]);
  // tensor = tensor.reshape([-1, 48, 48, 3]);
  // console.log("tensor.reshape:", tensor);
  // const r = model?.predict(tensor);
  // console.log("predict result r: ", r);

  // const rt = r as tf.Tensor;
  // tf.print(rt);
  // console.log("rt ", rt.shape);
};

export const ObjectDetectionPage: FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);

  const imgInputEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0] != null) {
      setImgFile(e.target.files[0]);
    }
  };

  const imgElEventHandler = (imgEl: HTMLImageElement): void => {
    console.log("start predict");
    objDetection(imgEl)
      .then((result) => {
        console.log("r: ", result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="object-detection">
      <div className="main">
        <div>
          <input
            onChange={(e) => {
              imgInputEventHandler(e);
            }}
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
          />
        </div>
        <div>
          {imgFile != null && (
            <ImgElement imgFile={imgFile} imgEvt={imgElEventHandler} />
          )}
        </div>
        <div></div>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};
