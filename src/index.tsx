import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import { DAppProvider } from "@usedapp/core";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <NextUIProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </HashRouter>
      </NextUIProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
