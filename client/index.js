import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import style from "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World!</div>
  </Provider>,
  document.getElementById("app")
);
