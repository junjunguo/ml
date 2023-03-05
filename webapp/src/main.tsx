import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { EmotionDetectionPage } from "./pages/emotionDetection/EmotionDetectionPage";
import { FaceDetectionPage } from "./pages/faceDetection/FaceDetectionPage";
import { RouterPath } from "./types/RouterPath.enum";

const router = createHashRouter([
  { path: RouterPath.Main, element: <App /> },
  { path: RouterPath.FaceDetection, element: <FaceDetectionPage /> },
  { path: RouterPath.EmotionDetection, element: <EmotionDetectionPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
