import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import {
  EmotionDetectionPage,
  ImgEmotionDetectionPage,
} from "./pages/emotionDetection";
import { FaceDetectionPage } from "./pages/faceDetection";
import { ObjectDetectionPage } from "./pages/objectDetection/objectDetectionPage";
import { RouterPath } from "./types/RouterPath.enum";

const router = createHashRouter([
  { path: RouterPath.Main, element: <App /> },
  { path: RouterPath.FaceDetection, element: <FaceDetectionPage /> },
  { path: RouterPath.EmotionDetection, element: <EmotionDetectionPage /> },
  {
    path: RouterPath.ImgEmotionDetection,
    element: <ImgEmotionDetectionPage />,
  },
  {
    path: RouterPath.ObjectDetection,
    element: <ObjectDetectionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
