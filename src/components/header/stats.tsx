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
        {account ? `WALLET BALANCE: ${walletDisplayValue}` : <>&nbsp;</>}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        {account ? `ESCROW BALANCE: ${escrowDisplayValue}` : <>&nbsp;</>}
      </Text>
      <Text size={14} css={{ fontFamily: "$mono", textAlign: "right" }}>
        {account ? (
          <>
            {`ESCROW: ${displayAddress} ${isCopied ? "(Copied!)" : ""}`}{" "}
            <BiCopy style={{ cursor: "pointer" }} onClick={handleCopy} />
          </>
        ) : (
          <>&nbsp;</>
        )}
      </Text>
    </div>
  );
};
