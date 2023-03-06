import "./imgEmotionDetectionPage.scss";

import { predictEmotion } from "@jj/emotion";
import React, { type FC } from "react";

import { Nav } from "../../nav/Nav";

export const ImgEmotionDetectionPage: FC = () => {
  return (
    <div className="img-emotion-detection">
      <div className="main"></div>
      img her
      <div>
        <Nav />
      </div>
    </div>
  );
};
