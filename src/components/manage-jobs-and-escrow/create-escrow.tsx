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
import { formatBalance } from "../../utils";

export const CreateEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { account } = useEthers();

  const handleSubmit = () => {
    setLoading(true);
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);

  return (
    <Card>
      <Spacer />
      <Text h3>Create Escrow</Text>
      <Spacer />

      <Input
        value={value}
        onChange={handleChange}
        type="number"
        label="Amount to deposit (optional)"
        placeholder=""
        clearable={!loading}
        bordered
        labelLeft="BNB"
        disabled={loading || !account}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading || !account} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Create"}
      </Button>
      <Spacer />
    </Card>
  );
};
