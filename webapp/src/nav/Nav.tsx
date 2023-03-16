import "./nav.scss";

import React, { type FC } from "react";
import { NavLink } from "react-router-dom";

import { RouterPath } from "../types/RouterPath.enum";

export const Nav: FC = () => {
  return (
    <nav>
      <ul>
        {Object.entries(RouterPath)
          .filter(([k, v]) => [RouterPath.FaceDetection].some((p) => p !== v))
          .map(([k, v]) => (
            <li key={k}>
              <NavLink
                to={v}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {k}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
