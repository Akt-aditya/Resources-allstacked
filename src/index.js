import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import Login from "./Componenets/Login"
import App from "./App";



ReactDOM.render(
  <BrowserRouter>
  <Login />
  </BrowserRouter>,
  document.getElementById("root")
);
