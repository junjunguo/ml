import React, { type FC, useEffect, useRef } from "react";

export const CanvasElement: FC<{
  height: number;
  width: number;
  ctxEvt: (ctx: CanvasRenderingContext2D) => void;
  noAdjust?: boolean;
}> = ({ height, width, ctxEvt, noAdjust = false }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const canvasHandler = (canvas: HTMLCanvasElement): void => {
    canvas.height = height;
    canvas.width = width;
    const ctx = canvas.getContext("2d");
    if (ctx != null) {
      if (!noAdjust) {
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
      }
      ctxEvt(ctx);
    }
  };

  useEffect(() => {
    if (ref.current != null && width !== 0 && height !== 0) {
      canvasHandler(ref.current);
    }
  }, [ref.current, width, height]);

  return <canvas ref={ref}></canvas>;
};
