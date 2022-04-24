import { Button } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { BlurredCover } from "./blurred-cover";
import { BsLightningChargeFill } from "react-icons/bs";

const ConnectBtn: React.FC = () => {
  const { activateBrowserWallet, account } = useEthers();
  const [connectingWallet, setConnectingWallet] = useState(false);

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
  );
};
export const BlurredCoverWithConnect: React.FC = () => {
  return (
    <BlurredCover>
      <ConnectBtn />
    </BlurredCover>
  );
};
