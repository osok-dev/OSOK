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

export const OurTechnology: React.FC = () => {
  return (
    <Root>
      <Container>
        <Text
          h2
          size={60}
          weight="bold"
          css={{
            textGradient: "45deg, $blue500 30%, $pink500 50%",
            textAlign: "center",
          }}
        >
          Our Technology
        </Text>
        <Spacer y={2} />
        <Grid.Container gap={4} justify="center">
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Robust"
              header2="Hand built with Rust"
              imgSrc={cardBg2}
              flipImage={true}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Secure"
              header2="All contracts audited"
              imgSrc={cardBg3}
              flipImage={true}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <LandingCard
              header1="Supports BSC"
              header2="More chains coming soon"
              imgSrc={cardBg4}
              flipImage={true}
            />
          </Grid>
        </Grid.Container>
        <Spacer y={10} />
      </Container>
    </Root>
  );
};
