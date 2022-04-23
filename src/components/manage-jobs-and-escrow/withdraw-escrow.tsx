import {
  Card,
  Spacer,
  Input,
  Loading,
  Button,
  Text,
  FormElement,
} from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { useEscrowBalance, useEscrowExists } from "../../hooks";
import { formatBalance } from "../../utils";

export const WithdrawEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { account } = useEthers();
  const [value, setValue] = useState("");
  const escrowBalance = useEscrowBalance();
  const balanceDisplayValue = formatBalance(escrowBalance);
  const escrowExists = useEscrowExists();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a withdraw amount");
    } else {
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  return (
    <Card>
      <Spacer />
      <Text h3>Withdraw from Escrow</Text>
      <Spacer />
      <Input
        type="number"
        label="Amount to withdraw"
        placeholder=""
        value={value}
        onChange={handleChange}
        clearable={!loading}
        bordered
        labelLeft="BNB"
        disabled={loading || !escrowExists || !account}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Escrow balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button
        disabled={loading || !escrowExists || !account}
        onClick={handleSubmit}
        shadow
      >
        {loading ? "Awaiting signature..." : "Withdraw"}
      </Button>
      <Spacer />
    </Card>
  );
};
