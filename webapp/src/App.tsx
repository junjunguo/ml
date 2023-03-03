import React, { type FC } from "react";

import reactLogo from "./assets/react.svg";
import { Nav } from "./nav/Nav";

export const App: FC = () => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ML webapp</h1>
      <div>
        <Nav />
      </div>
    </div>
  );
};
