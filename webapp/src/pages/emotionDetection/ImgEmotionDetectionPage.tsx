import "./imgEmotionDetectionPage.scss";

import { predictEmotion } from "@jj/emotion";
import { ImgElement } from "@jj/visualize";
import React, { type ChangeEvent, type FC, useState } from "react";

import { Nav } from "../../nav/Nav";

export const ImgEmotionDetectionPage: FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);

  const imgInputEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0] != null) {
      setImgFile(e.target.files[0]);
    }
  };

  const imgElEventHandler = (imgEl: HTMLImageElement): void => {
    console.log("start predict");
    predictEmotion(imgEl)
      .then((result) => {
        console.log("r: ", result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="img-emotion-detection">
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
