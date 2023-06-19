import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./Providers/Provider";
import SkillProvider from "./Providers/SkillProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider>
        <SkillProvider>
          <App />
        </SkillProvider>
      </Provider>
    </React.StrictMode>
  </Router>
);
