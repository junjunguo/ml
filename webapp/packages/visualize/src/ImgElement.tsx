import React, { type FC, useEffect, useRef } from "react";

export const ImgElement: FC<{
  imgFile: File;
  imgEvt: (imgEl: HTMLImageElement) => void;
}> = ({ imgFile, imgEvt }) => {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = ref.current;
    if (img == null || img.src?.length > 1) return;

    img.src = URL.createObjectURL(imgFile);
    img.onload = () => {
      imgEvt(img);
    };
  }, [ref.current]);

  return <img ref={ref} />;
};
