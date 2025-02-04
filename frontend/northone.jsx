import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
