import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./fonts/fonts.css";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

console.log("test");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
