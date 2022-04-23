import { Table } from "@nextui-org/react";
import React from "react";
import { colDefs } from "./column-definitions";
import { dummyRows } from "./mock-row-data";

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

console.log(dummyRows);
export const OverviewTable: React.FC = () => {
  return (
    <>
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
        <Table.Body items={dummyRows}>
          {(item: RowData) => (
            <Table.Row key={item.key}>
              {/* @ts-ignore TODO: fix */}
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={8} />
      </Table>
    </>
  );
};
