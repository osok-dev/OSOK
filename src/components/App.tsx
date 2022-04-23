import React from "react";
import { Header } from "./header";
import { Container, Spacer, Text } from "@nextui-org/react";
import { ManageJobsAndEscrow } from "./manage-jobs-and-escrow";
import { OverviewTable } from "./overview-table";

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Spacer y={2} />
      <Text h1>Overview</Text>
      <Spacer />
      <OverviewTable />
      <Spacer y={2} />

      <Text h1>Manage Jobs and Escrow</Text>
      <Spacer />
      <ManageJobsAndEscrow />
    </Container>
  );
};
