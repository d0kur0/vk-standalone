import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";

export default function RootProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
