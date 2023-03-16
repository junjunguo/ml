import React, { type FC, useEffect, useRef } from "react";

export const VideoElement: FC<{
  stream: MediaStream;
  videoEvt: (video: HTMLVideoElement) => void;
  hide?: boolean;
}> = ({ stream, videoEvt, hide = false }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video != null) {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play().catch((e) => {
          console.error(e);
        });
        videoEvt(video);
      };
    }
  }, [videoRef.current]);

  return (
    <video
      ref={videoRef}
      style={{ display: hide ? "none" : undefined }}
    ></video>
  );
};
