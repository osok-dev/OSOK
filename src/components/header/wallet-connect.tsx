import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { Button } from "@nextui-org/react";
import { BsLightningChargeFill } from "react-icons/bs";
import { formatAddress } from "../../utils";

export const WalletConnect: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [connectingWallet, setConnectingWallet] = useState(false);

  const accountDisplayName = account && formatAddress(account);

  const handleConnect = () => {
    setConnectingWallet(true);
    activateBrowserWallet();
  };

  useEffect(() => {
    if (!account) {
      setConnectingWallet(false);
    }
  }, [account]);

  return (
    <>
      {account ? (
        <Button
          bordered
          color="gradient"
          onClick={deactivate}
          auto
          css={{ fontFamily: "$mono" }}
          rounded
        >
          {accountDisplayName}
        </Button>
      ) : (
        <Button
          onClick={handleConnect}
          color="gradient"
          auto
          disabled={connectingWallet && !account}
          rounded
        >
          {connectingWallet ? (
            "Connecting..."
          ) : (
            <>
              Connect wallet &nbsp;
              <BsLightningChargeFill />
            </>
          )}
        </Button>
      )}
    </>
  );
};
