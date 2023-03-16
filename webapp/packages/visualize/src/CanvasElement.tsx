import React, { type FC, useEffect, useRef } from "react";

export const CanvasElement: FC<{
  videoEl: HTMLVideoElement;
  ctxEvt: (ctx: CanvasRenderingContext2D) => void;
  noAdjust?: boolean;
}> = ({ videoEl, ctxEvt, noAdjust = false }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const canvasHandler = (canvas: HTMLCanvasElement): void => {
    canvas.height = videoEl.videoHeight;
    canvas.width = videoEl.videoWidth;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;

    if (!noAdjust) {
      ctx.translate(videoEl.videoWidth, 0);
      ctx.scale(-1, 1);
    }
    ctxEvt(ctx);
  };

  useEffect(() => {
    if (ref.current != null) {
      canvasHandler(ref.current);
    }
  }, [ref.current]);

  return <canvas ref={ref}></canvas>;
};
