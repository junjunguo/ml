import "./nav.scss";

import React, { type FC } from "react";
import { Link } from "react-router-dom";

import { RouterPath } from "../types/RouterPath.enum";

export const Nav: FC = () => {
  return (
    <nav>
      <ul>
        {Object.entries(RouterPath).map(([k, v]) => (
          <li key={k}>
            <Link to={v}>{k}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
