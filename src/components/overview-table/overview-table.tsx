import { Table, Text } from "@nextui-org/react";
import { useBlockNumber } from "@usedapp/core";
import React, { useEffect, useMemo } from "react";
import { colDefs } from "./column-definitions";
import styled from "styled-components";
import { useVaultHistory } from "../../hooks";
import { bigNumberToFloat } from "../../utils";

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
  const history = useVaultHistory();

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

  // amountIn: BigNumber {_hex: '0x0de0b6b3a7640000', _isBigNumber: true}
  // amountOut: BigNumber {_hex: '0x0bb99385589add1a00', _isBigNumber: true}
  // blockNumber: BigNumber {_hex: '0x0109ed58', _isBigNumber: true}
  // gasCostBNB: BigNumber {_hex: '0x0630ae4af0c600', _isBigNumber: true}
  // gasPrice: BigNumber {_hex: '0x05', _isBigNumber: true}
  // target: "0xF4505E3B9BeeAB5dDFaD7e7a90f0DB89dD61EfE1"
  // time: BigNumber {_hex: '0x626de9cd', _isBigNumber: true}

  const data: any[] = useMemo(() => {
    return (history || []).map((rawObj, i) => {
      return {
        key: i,
        target: rawObj.target,
        time: bigNumberToFloat(rawObj.time),
        amountIn: bigNumberToFloat(rawObj.amountIn),
        amountOut: bigNumberToFloat(rawObj.amountOut),
        blockNumber: bigNumberToFloat(rawObj.blockNumber),
        gasCostBNB: bigNumberToFloat(rawObj.gasCostBNB),
        gasPrice: bigNumberToFloat(rawObj.gasPrice),
      };
    });
  }, [history]);

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
