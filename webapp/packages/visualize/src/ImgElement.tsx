import React, { type FC, useEffect, useRef, useState } from "react";

export const ImgElement: FC<{
  imgFile: File;
  imgEvt?: (imgEl: HTMLImageElement) => void;
  title?: string;
}> = ({ imgFile, imgEvt, title = "Selected Image" }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = ref.current;
    const objUrl = URL.createObjectURL(imgFile);
    if (img == null || isLoading || img.src === objUrl) return;
    setIsLoading(true);

    img.src = objUrl;
    if (imgEvt == null) {
      setIsLoading(false);
      return;
    }
    img.onload = () => {
      imgEvt(img);
      setIsLoading(false);
    };
  }, [ref.current, imgFile]);

  return <img ref={ref} title={title} />;
};
