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
  const escrowDisplayValue = escrowBalance
    ? formatBalance(escrowBalance)
    : "loading";

  const etherBalance = useEtherBalance(account);
  const walletDisplayValue = etherBalance
    ? formatBalance(etherBalance)
    : "loading";

  const vaultAddress = useGetVaultAddress();
  const displayAddress = vaultAddress ? formatAddress(vaultAddress) : "loading";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(vaultAddress ?? "");
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
        {vaultAddress && <BiCopy />}
      </Text>
    </div>
  );
};
