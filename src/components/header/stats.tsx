import React from "react";
import { Text } from "@nextui-org/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatBalance } from "../../utils";
import { useEscrowBalance } from "../../hooks";

export const Stats: React.FC = () => {
  const { account } = useEthers();
  const escrowBalance = useEscrowBalance();
  const escrowDisplayValue = formatBalance(escrowBalance);

  const etherBalance = useEtherBalance(account);
  const walletDisplayValue = formatBalance(etherBalance);
  return (
    <div>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        ESCROW BALANCE: {escrowDisplayValue}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        WALLET BALANCE: {walletDisplayValue}
      </Text>
    </div>
  );
};
