import { CreateEscrow } from "./create-escrow";
import React from "react";
import { Grid } from "@nextui-org/react";
import { QuickGuide } from "./quick-guide";
import { SkeletonTile } from "../common";
import { useEthers } from "@usedapp/core";

const gridProps = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 4,
};

const SkeletonGrid = () => {
  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        <QuickGuide />
      </Grid>
      <Grid {...gridProps}>
        <SkeletonTile />
      </Grid>
    </Grid.Container>
  );
};

export const GettingStarted: React.FC = () => {
  const { account } = useEthers();

  if (!account) {
    return <SkeletonGrid />;
  }

  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        <QuickGuide />
      </Grid>
      <Grid {...gridProps}>
        <CreateEscrow />
      </Grid>

      <Grid {...gridProps}></Grid>
    </Grid.Container>
  );
};
