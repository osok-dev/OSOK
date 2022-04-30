import React from "react";
import { Grid } from "@nextui-org/react";

import { CreateJob } from "./create-job";
import { CreateEscrow } from "./create-escrow";
import { DepositEscrow } from "./deposit-escrow";
import { WithdrawEscrow } from "./withdraw-escrow";

interface Props {
  escrowExists: boolean;
}

const getGridProps = (escrowExists: boolean) => {
  if (escrowExists) {
    return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    };
  }

  return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  };
};

export const ManageJobsAndEscrow: React.FC<Props> = ({ escrowExists }) => {
  const gridProps = getGridProps(escrowExists);

  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        <CreateJob escrowExists={escrowExists} />
      </Grid>
      {!escrowExists && (
        <Grid {...gridProps}>
          <CreateEscrow />
        </Grid>
      )}
      <Grid {...gridProps}>
        <DepositEscrow escrowExists={escrowExists} />
      </Grid>
      <Grid {...gridProps}>
        <WithdrawEscrow escrowExists={escrowExists} />
      </Grid>
    </Grid.Container>
  );
};
