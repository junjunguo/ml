import "./imgEmotionDetectionPage.scss";

import { ChartjsBarChart, ImgPreview, predictEmotion } from "@jj/emotion";
import { ImgElement } from "@jj/visualize";
import React, { type ChangeEvent, type FC, useState } from "react";

import { Nav } from "../../nav/Nav";

export const ImgEmotionDetectionPage: FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  // const [imgDt, setImgDt] = useState<ImageBitmap | HTMLImageElement | null>(
  //   null
  // );
  const [chartData, setChartData] = useState<
    number[]
    // Array<{
    //   index: number;
    //   value: number;
    // }>
  >();

  const imgInputEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file == null) return;

    setImgFile(file);

    createImageBitmap(file)
      .then((r) => {
        // setImgDt(r);
        imgElEventHandler(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const imgElEventHandler = (imgEl: HTMLImageElement | ImageBitmap): void => {
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
        <div className="left">
          {imgFile != null && <ImgPreview imgFile={imgFile} />}
          <input
            onChange={(e) => {
              imgInputEventHandler(e);
            }}
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
          />
        </div>
        <div>{imgFile != null && <ImgElement imgFile={imgFile} />}</div>
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
