import {
  Card,
  Spacer,
  Input,
  Loading,
  Text,
  FormElement,
  Tooltip,
  Row,
} from "@nextui-org/react";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import React, { useCallback, useState } from "react";
import { formatAddress, formatBalance } from "../../utils";
import { BlurredCoverWithConnect, TransactionButton } from "../common";
import { FiInfo } from "react-icons/fi";
import { utils } from "ethers";
import { useGetVaultAddress } from "../../hooks";

export const DepositEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const { account } = useEthers();
  const { sendTransaction, state } = useSendTransaction();
  const vaultAddress = useGetVaultAddress();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a deposit amount");
    } else if (!vaultAddress) {
      alert("Error: no vault address");
    } else {
      setLoading(true);
      sendTransaction({
        to: vaultAddress,
        value: utils.parseEther(value.toString()),
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(Number.parseFloat(e.target.value));
  };

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);

  const handleOnSuccess = useCallback(() => {
    setValue(0);
  }, []);

  return (
    <Card>
      <Spacer />

      <Text h3>
        <Row align="center">
          <>Deposit to Escrow &nbsp;</>
          <Tooltip content={"Top up the escrow at any time"}>
            <FiInfo />
          </Tooltip>
        </Row>
      </Text>
      <Spacer />

      <Input
        type="number"
        label={`Amount to deposit. (vault addr: ${formatAddress(
          vaultAddress
        )})`}
        value={value}
        onChange={handleChange}
        placeholder=""
        bordered
        min={0}
        labelLeft="BNB"
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <TransactionButton
        text={"Deposit"}
        loading={loading}
        setLoading={setLoading}
        state={state}
        handleSubmit={handleSubmit}
        onSuccess={handleOnSuccess}
      />
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
