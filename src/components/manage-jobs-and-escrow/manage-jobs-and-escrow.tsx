import React from "react";
import { Grid } from "@nextui-org/react";

import { CreateJob } from "./create-job";
import { DepositEscrow } from "./deposit-escrow";
import { WithdrawEscrow } from "./withdraw-escrow";
import { ActiveJob } from "./active-job";
import { useEthers } from "@usedapp/core";
import { SkeletonTile } from "../common";

interface Props {
  hasActiveTarget: boolean;
}

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
        <SkeletonTile />
      </Grid>
      <Grid {...gridProps}>
        <SkeletonTile />
      </Grid>
      <Grid {...gridProps}>
        <SkeletonTile />
      </Grid>
    </Grid.Container>
  );
};

export const ManageJobsAndEscrow: React.FC<Props> = ({ hasActiveTarget }) => {
  const { account } = useEthers();

  if (!account) {
    return <SkeletonGrid />;
  }

  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        {hasActiveTarget ? <ActiveJob /> : <CreateJob />}
      </Grid>
      <Grid {...gridProps}>
        <DepositEscrow />
      </Grid>

      <Grid {...gridProps}>
        <WithdrawEscrow />
      </Grid>
    </Grid.Container>
  );
};
