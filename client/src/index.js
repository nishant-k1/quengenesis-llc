import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import "./index.css";
import App from "../src/components/App/App";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* ✅ No Router here; it's inside App.js */}
  </React.StrictMode>
);

serviceWorker.unregister();
