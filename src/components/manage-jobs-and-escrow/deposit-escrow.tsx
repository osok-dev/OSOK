import {
  Card,
  Spacer,
  Input,
  Loading,
  Button,
  Text,
  FormElement,
} from "@nextui-org/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { useEscrowExists } from "../../hooks";
import { formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";

export const DepositEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { account } = useEthers();
  const escrowExists = useEscrowExists();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a deposit amount");
    } else {
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);

  return (
    <Card>
      <Spacer />
      <Text h3>Deposit to Escrow</Text>
      <Spacer />

      <Input
        type="number"
        label="Amount to deposit"
        value={value}
        onChange={handleChange}
        placeholder=""
        clearable={!loading}
        bordered
        labelLeft="BNB"
        disabled={loading || !escrowExists}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading || !escrowExists} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Deposit"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
