import "./emotionDetectionPage.scss";

import { ChartjsBarChart, log, predictEmotion } from "@jj/emotion";
import { VideoElement } from "@jj/visualize";
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

export const EmotionDetectionPage: FC = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>(
    undefined
  );

  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [chartData, setChartData] = useState<number[]>();

  const mediaStreamHandler = (): void => {
    navigator.mediaDevices
      .getUserMedia(mediaConfig)
      .then((stream) => {
        setMediaStream(stream);
      })
      .catch(log);
  };

  let rafId: number;
  const fps = 5;
  let now;
  let then = Date.now();
  const interval = 1000 / fps;
  let delta;
  const runDetection = async (): Promise<void> => {
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);

      await new Promise((resolve) => {
        if (videoEl != null) {
          predictEmotion(videoEl)
            .then(setChartData)
            .catch(log)
            .finally(() => {
              resolve(videoEl);
            });
        } else {
          resolve(videoEl);
        }
      });
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
    if (videoEl != null) runDetection().catch(log);
  }, [videoEl]);

  return (
    <div className="emotion-detection">
      <div className="main">
        {mediaStream != null && (
          <VideoElement stream={mediaStream} videoEvt={setVideoEl} />
        )}

        {chartData != null && (
          <ChartjsBarChart performanceMode data={chartData} />
        )}
      </div>

      <div>
        <Nav />
      </div>
    </div>
  );
};
