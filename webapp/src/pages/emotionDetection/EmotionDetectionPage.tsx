import "./emotionDetectionPage.scss";

import { runFaceDetecter, STATE, VIDEO_SIZE } from "@js/tf";
import { runEmotionDetection } from "@js/tf/emotionDetectionUtils";
import { CanvasElement, VideoElement } from "@js/visualize";
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

export const EmotionDetectionPage: FC = () => {
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
    if (videoEl != null) {
      runEmotionDetection().catch((e) => {
        console.log(e);
      });
    }
  }, [videoEl]);

  return (
    <div className="face-detection">
      <div id="stats"></div>
      <div className="main">
        <div className="canvas-wrapper">
          {/* {videoEl != null && (
            <CanvasElement videoEl={videoEl} ctxEvt={setCtx} />
          )} */}
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
