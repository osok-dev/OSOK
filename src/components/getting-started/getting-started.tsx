import { CreateEscrow } from "./create-escrow";
import React from "react";
import { Grid } from "@nextui-org/react";
import { QuickGuide } from "./quick-guide";

export const GettingStarted: React.FC = () => {
  const gridProps = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
  };

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
