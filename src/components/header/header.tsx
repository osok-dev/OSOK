import { Button, Row } from "@nextui-org/react";
import React from "react";
import { Text } from "@nextui-org/react";
import { MdLaunch } from "react-icons/md";
import { WalletConnect } from "./wallet-connect";
import { Stats } from "./stats";
import { Link } from "react-router-dom";
import { ChainId, useEthers } from "@usedapp/core";

interface Props {
  isLandingPage: boolean;
}
export const Header: React.FC<Props> = ({ isLandingPage }) => {
  const { chainId } = useEthers();
  const { account } = useEthers();

  const isTestnet = chainId === ChainId.BSCTestnet;
  const logoCss = isLandingPage
    ? {
        color: "#FFFFFFDD",
      }
    : {
        textGradient: "45deg, $blue500 -20%, $pink500 50%",
      };

  return (
    <div>
      <Row justify="space-between" align="center" css={{ paddingTop: 10 }}>
        <Link to="/">
          <Text weight="bold" size={30} css={logoCss}>
            OSOK
          </Text>
        </Link>

        {isTestnet && (
          <Text
            css={{
              color: "white",
              background: "$red500",
              padding: "0 20px",
              borderRadius: 4,
            }}
            weight="bold"
          >
            BSC TESTNET
          </Text>
        )}
        {isLandingPage ? (
          <Link to="/app">
            <Button color="gradient" auto rounded>
              Launch App &nbsp;
              <MdLaunch />
            </Button>
          </Link>
        ) : (
          <WalletConnect />
        )}
      </Row>

      <Row justify="flex-end" align="center">
        {!isLandingPage && account && <Stats />}
      </Row>
    </div>
  );
};
