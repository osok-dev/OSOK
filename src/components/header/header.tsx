import { Row } from "@nextui-org/react";
import React from "react";
import { Text } from "@nextui-org/react";

import { WalletConnect } from "./wallet-connect";
import { Stats } from "./stats";
import { useEthers } from "@usedapp/core";

export const Header: React.FC = () => {
  const { account } = useEthers();

  return (
    <div>
      <Row justify="space-between" align="center" css={{ marginTop: 10 }}>
        <Text
          weight="bold"
          size={30}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
        >
          OSOK
        </Text>

        <WalletConnect />
      </Row>

      <Row justify="flex-end" align="center">
        {account && <Stats />}
      </Row>
    </div>
  );
};
