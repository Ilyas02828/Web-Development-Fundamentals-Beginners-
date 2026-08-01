import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../../../bootstrap-css/bootstrap.min.css";
import "../../../bootstrap-js/bootstrap.bundle.min.js";

// import Task12App from "./Task-12-src/Task12App";
import Task13App from "./Task-13-src/Task13App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Task12App /> */}
    <Task13App />
  </StrictMode>,
);
