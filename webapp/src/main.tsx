import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { FaceDetection } from "./faceDetect/FaceDetection";
import { RouterPath } from "./types/RouterPath.enum";

const router = createHashRouter([
  { path: RouterPath.Main, element: <App /> },
  { path: RouterPath.FaceDetection, element: <FaceDetection /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
