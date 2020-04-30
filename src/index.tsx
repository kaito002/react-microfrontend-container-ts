import React from "react";
import { render } from "react-dom";
import { unregister } from "./serviceWorker";
import App from "./App";

window["renderMainContainer"] = (containerId) => {
  render(<App />, document.getElementById(containerId))
  unregister()
}

window["renderMainContainer"]("main-container")
