import React from "react";
import { Header } from "../header";
import { Container, Spacer, Text } from "@nextui-org/react";
import { ManageJobsAndEscrow } from "../manage-jobs-and-escrow";
import { OverviewTable } from "../overview-table";
import { useHasVault } from "../../hooks";
import { GettingStarted } from "../getting-started";

export const Dashboard: React.FC = () => {
  const escrowExists = useHasVault();

  return (
    <Container>
      <Header isLandingPage={false} />

      {!escrowExists && (
        <>
          <Spacer y={2} />
          <Text weight="bold" h2 size={48}>
            Getting started
          </Text>
          <Spacer />
          <GettingStarted />
        </>
      )}

      <Spacer y={2} />
      <Text weight="bold" h2 size={48}>
        Manage Jobs and Escrow
      </Text>
      <Spacer />
      <ManageJobsAndEscrow escrowExists={escrowExists} />

      <Spacer y={2} />
      <Text weight="bold" h2 size={48}>
        Overview
      </Text>
      <Spacer />
      <OverviewTable />
      <Spacer y={5} />
    </Container>
  );
};
