import React from "react";
import { Header } from "../header";
import { Container, Spacer, Text } from "@nextui-org/react";
import { ManageJobsAndEscrow } from "../manage-jobs-and-escrow";
import { OverviewTable } from "../overview-table";
import {
  useGetVaultAddress,
  useHasActiveTarget,
  useHasVault,
} from "../../hooks";
import { GettingStarted, GettingStartedNoAccount } from "../getting-started";
import { useEthers } from "@usedapp/core";
import { LoadingText } from "./loading-text";

export const DashboardContainer: React.FC = () => {
  const { account } = useEthers();

  return (
    <Container>
      <Header isLandingPage={false} />
      {account ? (
        <EscrowGate />
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

// surely theres a better name
const EscrowGate: React.FC = () => {
  const escrowExists = useHasVault();
  const loadingHasVault = escrowExists === undefined;

  if (!escrowExists) {
    return (
      <>
        {loadingHasVault ? (
          <LoadingText text={"Loading vault status"} />
        ) : (
          <>
            <Spacer y={2} />
            <Text weight="bold" h2 size={48}>
              Getting started
            </Text>
            <Spacer />
            <GettingStarted />
          </>
        )}
      </>
    );
  }

  return <EscrowAddressGate />;
};

const EscrowAddressGate: React.FC = () => {
  const vaultAddress = useGetVaultAddress();

  const loadingEscrowAddress = vaultAddress === undefined;

  if (loadingEscrowAddress) {
    return <LoadingText text={"Loading vault details"} />;
  }

  return <Dashboard vaultAddress={vaultAddress} />;
};

interface Props {
  vaultAddress: string;
}
const Dashboard: React.FC<Props> = ({ vaultAddress }) => {
  const hasActiveTarget = useHasActiveTarget(vaultAddress);

  const loadingHasActiveTarget = hasActiveTarget === undefined;

  return (
    <>
      {loadingHasActiveTarget ? (
        <LoadingText text={"Loading target status"} />
      ) : (
        <>
          <Spacer y={2} />
          <Text weight="bold" h2 size={48}>
            Manage Jobs and Escrow
          </Text>
          <Spacer />
          <ManageJobsAndEscrow hasActiveTarget={hasActiveTarget!} />

          <Spacer y={2} />
          <Text weight="bold" h2 size={48}>
            Overview
          </Text>
          <Spacer />
          <OverviewTable />
          <Spacer y={5} />
        </>
      )}
    </>
  );
};
