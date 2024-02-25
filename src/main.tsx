import ReactDOM from "react-dom/client";

import { Routes } from "./Routes";
import "./assets/styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="wrapper" id="wrapper">
    <Routes />
  </div>,
);
