import "./faceDetectionPage.scss";

import { runFaceDetecter, STATE, VIDEO_SIZE } from "@jj/tf";
import { CanvasElement, VideoElement } from "@jj/visualize";
import React, { type FC, useEffect, useState } from "react";

import { Nav } from "../../nav/Nav";

const mediaConfig: MediaStreamConstraints = {
  audio: false,
  video: {
    // front camera if available
    facingMode: "user",
    frameRate: { ideal: 60 },
    ...VIDEO_SIZE[STATE.camera.sizeOption],
  },
};

/***
 * @see https://github.com/tensorflow/tfjs-models/blob/master/face-detection/README.md
 */
export const FaceDetectionPage: FC = () => {
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
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    mediaStreamHandler();
  }, []);

  useEffect(() => {
    if (ctx != null && videoEl != null) {
      runFaceDetecter(videoEl, ctx).catch((e) => {
        console.error(e);
      });
    }
  }, [ctx, videoEl]);

  return (
    <div className="face-detection">
      <div id="stats"></div>
      <div className="main">
        <div className="canvas-wrapper">
          {videoEl != null && (
            <CanvasElement videoEl={videoEl} ctxEvt={setCtx} />
          )}
          {mediaStream != null && (
            <VideoElement stream={mediaStream} videoEvt={setVideoEl} />
          )}
        </div>
      </div>

      <div>
        <Nav />
      </div>
    </div>
  );
};
