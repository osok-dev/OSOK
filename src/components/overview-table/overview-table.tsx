import { Table, Text } from "@nextui-org/react";
import { useBlockNumber } from "@usedapp/core";
import React, { useEffect } from "react";
import { colDefs } from "./column-definitions";
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

let time = window.performance.now();
export const OverviewTable: React.FC = () => {
  const blockNo = useBlockNumber();

  useEffect(() => {
    const now = window.performance.now();
    console.log(
      "blockNo:",
      blockNo,
      ", blockTime:",
      Math.floor((now - time) / 1000)
    );
    time = now;
  }, [blockNo]);

  const data: any = [];

  return (
    <Root>
      {data.length > 0 ? (
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
      ) : (
        <Text size={20}>
          Job history will show here when there is data. Job statuses may take a
          minute to update
        </Text>
      )}
    </Root>
  );
};
