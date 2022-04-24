import { Button, Container, Row, Spacer, Text } from "@nextui-org/react";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { beatherBg } from "../../images";

const Root = styled.div`
  height: 700px;
  background: url(${beatherBg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Breather: React.FC = () => {
  return (
    <Root>
      <Container>
        <Row justify="center">
          <Text
            h3
            weight="bold"
            size={60}
            css={{
              color: "#FFFFFFCC",
              paddingTop: 220,
            }}
          >
            Rival snipes will always come second
          </Text>
        </Row>
        <Row justify="center">
          <Text
            h4
            size={26}
            css={{
              color: "#FFFFFFCC",
              paddingLeft: 7,
            }}
          >
            Transaction order within a block will always favour us
          </Text>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Link to="/app">
            <Button size="xl" color="gradient">
              Get started
            </Button>
          </Link>
        </Row>
      </Container>
    </Root>
  );
};
