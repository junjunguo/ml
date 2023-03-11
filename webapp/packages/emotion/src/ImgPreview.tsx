import React, { type FC, useEffect, useRef, useState } from "react";

import { modelInputImg2Dshape } from "./constants";
import { tensorToPixels } from "./utils";

/**
 * A preview of same size image that is send in for predict
 */
export const ImgPreview: FC<{
  imgFile: File;
  title?: string;
}> = ({ imgFile, title = "Processed Image" }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const imgElHandler = (
    imgEl: ImageBitmap,
    canvas: HTMLCanvasElement
  ): void => {
    tensorToPixels(canvas, imgEl)
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas == null || isLoading || imgFile == null) return;
    setIsLoading(true);

    createImageBitmap(imgFile)
      .then((r) => {
        imgElHandler(r, canvas);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [ref.current, imgFile]);

  return (
    <canvas
      aria-label={title}
      title={title}
      ref={ref}
      style={{
        height: modelInputImg2Dshape[0],
        width: modelInputImg2Dshape[1],
      }}
    />
  );
};
