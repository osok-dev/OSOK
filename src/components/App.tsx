import React from "react";
import { ManageFunds } from "./pages/manage-funds";
import { Overview } from "./pages/overview";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { CreateJob } from "./pages/create-job";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export const App: React.FC = () => {
  const { chainId } = useEthers();
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  console.log(etherBalance);
  return (
    <HashRouter basename="/">
      {account ? (
        <div>
          <div>
            account:{" "}
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </div>
          <div>chainid: {chainId}</div>
          <div>is bnb mainnet: {chainId === 56 ? "yes" : "no"}</div>
          <div>is bnb testnet: {chainId === 97 ? "yes" : "no"}</div>
          <div>
            balance:{" "}
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}{" "}
            BNB
          </div>
        </div>
      ) : (
        <div>
          <button onClick={activateBrowserWallet}>connect wallet</button>
        </div>
      )}

      <div>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/create-job">Create Job</Link>
          </li>
          <li>
            <Link to="/manage-funds">Manage Funds</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/manage-funds" element={<ManageFunds />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
