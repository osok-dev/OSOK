import React from "react";
import { Grid } from "@nextui-org/react";

import { CreateJob } from "./create-job";
import { DepositEscrow } from "./deposit-escrow";
import { WithdrawEscrow } from "./withdraw-escrow";
import { useHasActiveJob } from "../../hooks";
import { ActiveJob } from "./active-job";

interface Props {
  escrowExists: boolean;
}

export const ManageJobsAndEscrow: React.FC<Props> = ({ escrowExists }) => {
  const hasActiveJob = useHasActiveJob();
  const gridProps = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
  };

  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        {hasActiveJob ? (
          <ActiveJob />
        ) : (
          <CreateJob escrowExists={escrowExists} />
        )}
      </Grid>
      <Grid {...gridProps}>
        <DepositEscrow escrowExists={escrowExists} />
      </Grid>
      <Grid {...gridProps}>
        <WithdrawEscrow escrowExists={escrowExists} />
      </Grid>
    </Grid.Container>
  );
};
