import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export const WalletConnect: React.FC = () => {
  const { chainId } = useEthers();
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return (
    <>
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
          <div>
            <button onClick={deactivate}>logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={activateBrowserWallet}>connect wallet</button>
        </div>
      )}
    </>
  );
};
