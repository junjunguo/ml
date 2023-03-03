import "./faceDetection.scss";

import { CanvasElement, VideoElement } from "@js/visualize";
import React, { type FC, useEffect, useState } from "react";

import { Nav } from "../nav/Nav";

const mediaConfig: MediaStreamConstraints = {
  audio: false,
  video: {
    // front camera if available
    facingMode: "user",
    width: 270, // 360
    height: 360, // 640
    frameRate: { ideal: 60 },
  },
};

/***
 * @see https://github.com/tensorflow/tfjs-models/blob/master/face-detection/README.md
 */
export const FaceDetection: FC = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>(
    undefined
  );

  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(mediaConfig)
      .then((stream) => {
        setMediaStream(stream);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="face-detection">
      <div id="stats"></div>
      <div className="main">
        <div className="canvas-wrapper">
          {videoEl != null && <CanvasElement videoEl={videoEl} />}
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
