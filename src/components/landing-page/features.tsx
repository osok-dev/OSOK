import React from "react";
import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import styled from "styled-components";
import { cardBg2, cardBg3, cardBg4 } from "../../images";
import { LandingCard } from "./landing-card";

const Root = styled.div`
  background: #f9f8fa;
  /* background: linear-gradient(45deg, #fde2eb 20%, #f1e6fb 80%); */
  background: linear-gradient(45deg, #fbf5f7 20%, #faf6fd 80%);

  padding-top: 140px;
`;

export const Features: React.FC = () => {
  return (
    <Root>
      <Container>
        <Text
          h2
          weight="bold"
          size={60}
          css={{
            textGradient: "45deg, $blue500 30%, $pink500 50%",
            textAlign: "center",
          }}
        >
          Features
        </Text>
        <Spacer y={2} />
        <Grid.Container gap={4} justify="center">
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Face Melting Speed"
              header2="Peerless block construct time"
              imgSrc={cardBg3}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Verifiable Trust"
              header2="Anti-rug mechanisms built in"
              imgSrc={cardBg4}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Simplicity"
              header2="Do everything through our UI"
              imgSrc={cardBg2}
            />
          </Grid>
        </Grid.Container>
        <Spacer y={10} />
      </Container>
    </Root>
  );
};
