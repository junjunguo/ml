import React, { type FC, useEffect, useRef, useState } from "react";

export const CanvasElement: FC<{ videoEl: HTMLVideoElement }> = ({
  videoEl,
}) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const canvasContextHandler = (): void => {
    if (ctx == null) return;

    ctx.translate(videoEl.videoWidth, 0);
    ctx.scale(-1, 1);

    drawCtx();
  };

  const canvasHandler = (canvas: HTMLCanvasElement): void => {
    canvas.height = videoEl.videoHeight;
    canvas.width = videoEl.videoWidth;
    setCtx(canvas.getContext("2d"));
  };

  let rafId;

  const drawCtx = (): void => {
    if (ctx == null) return;

    ctx.drawImage(videoEl, 0, 0, videoEl.videoWidth, videoEl.videoHeight);

    rafId = window.requestAnimationFrame(drawCtx);
  };

  useEffect(() => {
    canvasContextHandler();
  }, [ctx]);

  useEffect(() => {
    if (ref.current != null) {
      canvasHandler(ref.current);
    }
  }, [ref.current]);

  return <canvas ref={ref}></canvas>;
};
