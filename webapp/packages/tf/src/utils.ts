export const isiOS = (): boolean =>
  /iPhone|iPad|iPod/i.test(navigator.userAgent);

export const isAndroid = (): boolean => /Android/i.test(navigator.userAgent);

export const isMobile = (): boolean => isAndroid() || isiOS();

export const drawPath = (
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  closePath: boolean
): void => {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
};

export const drawCtx = (
  video: HTMLVideoElement,
  ctx: CanvasRenderingContext2D
): void => {
  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
};
