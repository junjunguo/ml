import "./emotionDetectionPage.scss";

import { runEmotionDetection } from "@jj/emotion";
import { STATE, VIDEO_SIZE } from "@jj/tf";
import { VideoElement } from "@jj/visualize";
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
