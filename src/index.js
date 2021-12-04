import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
module.hot.accept();
