import React, { useCallback, useEffect, useState } from "react";
import { Text } from "@nextui-org/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatAddress, formatBalance } from "../../utils";
import { useGetVaultAddress, useVaultBalance } from "../../hooks";
import { BiCopy } from "react-icons/bi";

export const Stats: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const { account } = useEthers();
  const escrowBalance = useVaultBalance();
  const escrowDisplayValue = formatBalance(escrowBalance);

  const etherBalance = useEtherBalance(account);
  const walletDisplayValue = formatBalance(etherBalance);

  const vaultAddress = useGetVaultAddress();
  const displayAddress = formatAddress(vaultAddress);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(vaultAddress);
    setIsCopied(true);
  }, [vaultAddress]);

  useEffect(() => {
    setIsCopied(false);
  }, [vaultAddress]);

  return (
    <div>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        WALLET BALANCE: {walletDisplayValue}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        ESCROW BALANCE: {escrowDisplayValue}
      </Text>
      <Text
        size={14}
        css={{ fontFamily: "$mono", textAlign: "right", cursor: "pointer" }}
        onClick={handleCopy}
      >
        ESCROW: {displayAddress} {isCopied ? "(Copied!)" : ""}
        <BiCopy />
      </Text>
    </div>
  );
};
