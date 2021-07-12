import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Appp from "./Appp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
        <Appp />
  </StrictMode>,
  rootElement
);
