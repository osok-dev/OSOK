import React from "react";
import { Text } from "@nextui-org/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export const Stats: React.FC = () => {
  const { chainId, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const balanceDisplayValue =
    account && etherBalance
      ? `${parseFloat(formatEther(etherBalance)).toFixed(3)}
    BNB`
      : 0;

  let chainName = "Unknown chain";
  if (chainId === 56) {
    chainName = "MAINNET";
  } else if (chainId === 97) {
    chainName = "TESTNET";
  }

  return (
    <div>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        ESCROW BALANCE: 0 BNB
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        WALLET BALANCE: {balanceDisplayValue}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        CHAIN: {chainName}
      </Text>
    </div>
  );
};
