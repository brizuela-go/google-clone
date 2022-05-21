import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import ResultContextProvider from "./context/ResultContextProvider";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const container = document.getElementById("root");
const root = createRoot(container); //

root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
