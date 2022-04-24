import React from "react";
import styled from "styled-components";
import { Breather } from "./breather";
import { Features } from "./features";
import { Hero } from "./hero";
import { OurTechnology } from "./our-technology";

const Root = styled.div``;

export const LandingPage: React.FC = () => {
  return (
    <Root>
      <Hero />
      <Features />
      <Breather />
      <OurTechnology />
    </Root>
  );
};
