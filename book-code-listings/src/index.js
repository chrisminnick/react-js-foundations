import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {Suspense} from 'react';
ReactDOM.render(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>,
  document.getElementById("root")
);