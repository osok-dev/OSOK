import {
  Card,
  Spacer,
  Input,
  Loading,
  Text,
  FormElement,
  Row,
  Tooltip,
} from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React, { useCallback, useState } from "react";
import {
  useGetVaultAddress,
  useVaultBalance,
  useWithdrawFromVault,
} from "../../hooks";
import { formatAddress, formatBalance } from "../../utils";
import { BlurredCoverWithConnect, TransactionButton } from "../common";
import { FiInfo } from "react-icons/fi";
import { utils } from "ethers";

export const WithdrawEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { send, state } = useWithdrawFromVault();

  const { account } = useEthers();
  const [value, setValue] = useState(0);
  const escrowBalance = useVaultBalance();
  const balanceDisplayValue = formatBalance(escrowBalance);
  const vaultAddress = useGetVaultAddress();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a withdraw amount");
    } else {
      setLoading(true);

      const amount = utils.parseEther(value.toString());
      send(amount);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(Number.parseFloat(e.target.value));
  };

  const handleOnSuccess = useCallback(() => {
    setValue(0);
  }, []);

  return (
    <Card>
      <Spacer />
      <Text h3></Text>
      <Text h3>
        <Row align="center">
          <>Withdraw from Escrow &nbsp;</>
          <Tooltip content={"This will withdraw all funds"}>
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
        placeholder=""
        value={value}
        onChange={handleChange}
        bordered
        min={0}
        // max={} todo
        labelLeft="BNB"
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Escrow balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <TransactionButton
        text={"Withdraw"}
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
