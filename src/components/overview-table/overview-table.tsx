import { Table } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React from "react";
import { BlurredCoverWithConnect } from "../common";
import { colDefs } from "./column-definitions";
import { dummyRows } from "./mock-row-data";
import styled from "styled-components";

interface RowData {
  key: string;
  status: string;
  amount: string;
  address: string;
  timestamp: string;
  blockNo: number;
  amountIn: number;
  amountOut: number;
  gasPrice: number;
  gasAmount: number;
  gasCost: number;
}

const Root = styled.div`
  position: relative;
`;
export const OverviewTable: React.FC = () => {
  const { account } = useEthers();

  // use dummy data to mock behind the blur but once
  // account active do a fetch to get real data
  const data = account ? dummyRows : dummyRows;

  return (
    <Root>
      <Table
        aria-label="Overview of jobs"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={colDefs}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data}>
          {(item: RowData) => (
            <Table.Row key={item.key}>
              {/* @ts-ignore TODO: fix */}
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={8} />
      </Table>
      {!account && <BlurredCoverWithConnect />}
    </Root>
  );
};
