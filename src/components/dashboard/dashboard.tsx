import React from "react";
import { Header } from "../header";
import { Container, Spacer, Text } from "@nextui-org/react";
import { ManageJobsAndEscrow } from "../manage-jobs-and-escrow";
// import { OverviewTable } from "../overview-table";
import { useHasActiveTarget, useHasVault } from "../../hooks";
import { GettingStarted } from "../getting-started";
import { useEthers } from "@usedapp/core";
import { LoadingText } from "./loading-text";
import { GettingStartedNoAccount } from "../getting-started/getting-started-no-account";

export const DashboardContainer: React.FC = () => {
  const { account } = useEthers();

  return (
    <Container>
      <Header isLandingPage={false} />
      {account ? (
        <Dashboard />
      ) : (
        <>
          <Spacer y={2} />
          <Text weight="bold" h2 size={48}>
            Getting started
          </Text>
          <Spacer />
          <GettingStartedNoAccount />
        </>
      )}
    </Container>
  );
};

const Dashboard: React.FC = () => {
  const escrowExists = useHasVault();
  const hasActiveTarget = useHasActiveTarget();
  const { account } = useEthers();

  const loadingHasVault = escrowExists === undefined;
  const loadingHasActiveTarget = escrowExists && hasActiveTarget === undefined;
  const showLoading = (loadingHasVault || loadingHasActiveTarget) && account;

  const loadingText = `Loading ${
    loadingHasVault
      ? "vault status"
      : loadingHasActiveTarget
      ? "target status"
      : ""
  }`;
  return (
    <>
      {showLoading ? (
        <LoadingText text={loadingText} />
      ) : (
        <>
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

          {escrowExists && (
            <>
              <Spacer y={2} />
              <Text weight="bold" h2 size={48}>
                Manage Jobs and Escrow
              </Text>
              <Spacer />
              <ManageJobsAndEscrow
                escrowExists={escrowExists}
                hasActiveTarget={hasActiveTarget}
              />
            </>
          )}

          {escrowExists && (
            <>
              {/* TODO: enable */}
              {/* <Spacer y={2} />
              <Text weight="bold" h2 size={48}>
                Overview
              </Text>
              <Spacer />
              <OverviewTable />
              <Spacer y={5} /> */}
            </>
          )}
        </>
      )}
    </>
  );
};
