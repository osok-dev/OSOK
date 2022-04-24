import { Button, Container, Row, Spacer, Text } from "@nextui-org/react";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../images/landing-bg.jpg";
import { Header } from "../header";

const Root = styled.div`
  /* height: 100vh; */
  height: 900px;
  background: url(${bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Hero: React.FC = () => {
  return (
    <Root>
      <Container>
        <Header isLandingPage={true} />
        <Spacer y={10} />
        <Row justify="center">
          <Text
            h1
            size={80}
            css={{
              color: "#FFFFFFCC",
            }}
          >
            The fastest sniper bot on the market
          </Text>
        </Row>
        <Row justify="center">
          <Text
            h2
            size={30}
            css={{
              color: "#FFFFFFCC",
              paddingLeft: 7,
            }}
          >
            Unmatched execution speed with an anti-rug mechanism
          </Text>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Link to="/app">
            <Button size="xl" color="gradient">
              Give it a spin
            </Button>
          </Link>
        </Row>
      </Container>
    </Root>
  );
};
