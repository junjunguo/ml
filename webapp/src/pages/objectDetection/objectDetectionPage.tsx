import "./objectDetectionPage.scss";

import { log } from "@jj/emotion";
import { type DetectedObject, ssdMobileNetV2 } from "@jj/mobilenet";
import { hexColors } from "@jj/mobilenet";
import { CanvasElement, VideoElement } from "@jj/visualize";
import React, { type FC, useEffect, useState } from "react";

import { Nav } from "../../nav/Nav";

const mediaConfig: MediaStreamConstraints = {
  audio: false,
  video: {
    // front camera if available
    facingMode: "user",
    frameRate: { ideal: 60 },
    // ...VIDEO_SIZE[STATE.camera.sizeOption],
    height: 360,
    width: 360,
  },
};
export const ObjectDetectionPage: FC<{ detectionPerSec?: number }> = ({
  detectionPerSec = 20,
}) => {
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>(
    undefined
  );

  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const mediaStreamHandler = (): void => {
    navigator.mediaDevices
      .getUserMedia(mediaConfig)
      .then((stream) => {
        setMediaStream(stream);
      })
      .catch(log);
  };

  const ctxDraw = (result: DetectedObject[]): void => {
    if (ctx == null || videoEl == null) return;
    // ctx.drawImage(videoEl, 0, 0, videoEl.videoWidth, videoEl.videoHeight);
    ctx.drawImage(videoEl, 0, 0);
    // ctx.font = "10px Arial";

    // console.log("number of detections: ", result.length);
    // const colors = [...hexColors];
    for (let i = 0; i < result.length; i++) {
      // const color = colors.splice(
      //   Math.round(Math.random() * 100) % colors.length,
      //   1
      // )[0];
      const color = hexColors[i % hexColors.length];
      ctx.beginPath();
      ctx.rect(...result[i].bbox);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.stroke();
      ctx.fillText(
        result[i].score.toFixed(3) + " " + result[i].class,
        result[i].bbox[0],
        result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10
      );
    }

    // ctx.translate(videoEl.videoWidth, 0);
    // ctx.scale(-1, 1);
  };

  let rafId: number;
  let now;
  let then = Date.now();
  const interval = 1000 / detectionPerSec;
  let delta;
  const runDetection = async (): Promise<void> => {
    if (videoEl != null && ctx != null) {
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);

        await new Promise((resolve) => {
          ssdMobileNetV2(videoEl)
            .then(ctxDraw)
            .catch(log)
            .finally(() => {
              resolve(videoEl);
            });
        });
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    rafId = requestAnimationFrame(runDetection);
  };

  useEffect(() => {
    mediaStreamHandler();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (videoEl != null && ctx != null) runDetection().catch(log);
  }, [videoEl, ctx]);

  return (
    <div className="object-detection">
      <div className="main">
        {mediaStream != null && (
          <VideoElement stream={mediaStream} videoEvt={setVideoEl} hide />
        )}

        {videoEl != null && (
          <CanvasElement ctxEvt={setCtx} videoEl={videoEl} noAdjust />
        )}
      </div>

      <div>
        <Nav />
      </div>
    </div>
  );
};
