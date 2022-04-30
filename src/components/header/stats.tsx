import React from "react";
import { Text } from "@nextui-org/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatBalance } from "../../utils";
import { useVaultBalance } from "../../hooks";

export const Stats: React.FC = () => {
  const { account } = useEthers();
  const escrowBalance = useVaultBalance();
  const escrowDisplayValue = formatBalance(escrowBalance);

  const etherBalance = useEtherBalance(account);
  const walletDisplayValue = formatBalance(etherBalance);
  return (
    <div>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        {account ? `ESCROW BALANCE: ${escrowDisplayValue}` : <>&nbsp;</>}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        {account ? `WALLET BALANCE: ${walletDisplayValue}` : <>&nbsp;</>}
      </Text>
    </div>
  );
};
