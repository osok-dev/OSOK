import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { Button } from "@nextui-org/react";
import { BsLightningChargeFill } from "react-icons/bs";

export const WalletConnect: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [connectingWallet, setConnectingWallet] = useState(false);

  const accountDisplayName =
    account &&
    `${account.slice(0, 6)}...${account.slice(
      account.length - 4,
      account.length
    )}`;

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
        <div>
          <Button
            bordered
            color="gradient"
            onClick={deactivate}
            auto
            css={{ fontFamily: "$mono" }}
          >
            {accountDisplayName}
          </Button>
        </div>
      ) : (
        <div>
          <Button
            onClick={handleConnect}
            color="gradient"
            auto
            disabled={connectingWallet && !account}
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
        </div>
      )}
    </>
  );
};
