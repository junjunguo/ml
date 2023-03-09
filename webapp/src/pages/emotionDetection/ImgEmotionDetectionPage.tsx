import "./imgEmotionDetectionPage.scss";

import { ChartjsBarChart, predictEmotion } from "@jj/emotion";
import { ImgElement } from "@jj/visualize";
import React, { type ChangeEvent, type FC, useState } from "react";

import { Nav } from "../../nav/Nav";

export const ImgEmotionDetectionPage: FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [chartData, setChartData] = useState<
    number[]
    // Array<{
    //   index: number;
    //   value: number;
    // }>
  >();

  const imgInputEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log("new img ", e.target.files?.[0].name);
    if (e.target.files?.[0] != null) {
      setImgFile(e.target.files[0]);
    }
  };

  const imgElEventHandler = (imgEl: HTMLImageElement): void => {
    // console.log("start predict");
    predictEmotion(imgEl)
      .then((result) => {
        // console.log("r: ", result);
        // setChartData(result.map((v, i) => ({ index: i, value: v })));
        setChartData(result);
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
        <div className="chart">
          {/* <TfVisBarChart data={chartData} /> */}
          {chartData != null && <ChartjsBarChart data={chartData} />}
        </div>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};
