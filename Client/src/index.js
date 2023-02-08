import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from './store';
import { Provider } from 'react-redux';
import "./bootstrap.min.css";


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
