import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { DAppProvider } from "@usedapp/core";
import { NextUIProvider } from "@nextui-org/react";
import { App } from "./components/App";

// https://bsc-dataseed.binance.org/
// https://data-seed-prebsc-1-s1.binance.org:8545/

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider
      config={
        {
          // pollingInterval: 500,
          // notifications: {
          //   checkInterval: 500,
          //   expirationPeriod: 5000,
          // },
          // readOnlyChainId: 97,
          // readOnlyUrls: {
          //   97: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
          // },
        }
      }
    >
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
