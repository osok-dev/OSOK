import React from "react";
import { Header } from "./header";
import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import {
  CreateJob,
  CreateEscrow,
  DepositEscrow,
  WithdrawEscrow,
} from "./manage-jobs-and-funds";
import { OverviewTable } from "./overview-table";

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Spacer y={3} />
      <Text h1>Overview</Text>
      <Spacer />
      <OverviewTable />
      <Spacer y={2} />

      <Text h1>Manage Jobs and Funds</Text>
      <Spacer />
      <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CreateJob />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CreateEscrow />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <DepositEscrow />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <WithdrawEscrow />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
