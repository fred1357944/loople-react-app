import React from "react";
import ReactDOM from "react-dom/client";

import Root from './Root.js'

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
