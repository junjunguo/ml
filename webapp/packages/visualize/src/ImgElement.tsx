import React, { type FC, useEffect, useRef, useState } from "react";

export const ImgElement: FC<{
  imgFile: File;
  imgEvt: (imgEl: HTMLImageElement) => void;
}> = ({ imgFile, imgEvt }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = ref.current;
    const objUrl = URL.createObjectURL(imgFile);
    if (img == null || isLoading || img.src === objUrl) return;
    setIsLoading(true);

    img.src = objUrl;
    img.onload = () => {
      imgEvt(img);
      setIsLoading(false);
    };
  }, [ref.current, imgFile]);

  return <img ref={ref} />;
};
