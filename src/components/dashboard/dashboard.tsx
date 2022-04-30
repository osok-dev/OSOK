import React from "react";
import { Header } from "../header";
import { Container, Loading, Row, Spacer, Text } from "@nextui-org/react";
import { ManageJobsAndEscrow } from "../manage-jobs-and-escrow";
// import { OverviewTable } from "../overview-table";
import { useHasActiveTarget, useHasVault } from "../../hooks";
import { GettingStarted } from "../getting-started";
import { useEthers } from "@usedapp/core";

export const Dashboard: React.FC = () => {
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
    <Container>
      <Header isLandingPage={false} />
      {showLoading ? (
        <>
          <Spacer y={8} />
          <Row justify="center">
            <Text
              weight="bold"
              css={{
                textGradient: "45deg, $yellow500 -20%, $red500 50%",
              }}
              size={60}
            >
              {loadingText}
              &nbsp;
              <Loading
                css={{
                  color: "$red500",
                }}
                color="error"
                size="md"
              />
            </Text>
          </Row>
        </>
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
    </Container>
  );
};
