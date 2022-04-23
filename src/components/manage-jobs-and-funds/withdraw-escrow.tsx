import {
  Card,
  Spacer,
  Input,
  Loading,
  Button,
  Text,
  FormElement,
} from "@nextui-org/react";
import React, { useState } from "react";

export const WithdrawEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

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
      <Text h3>Withdraw From Escrow</Text>
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
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
      />
      <Spacer />
      <Button disabled={loading} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Withdraw"}
      </Button>
      <Spacer />
    </Card>
  );
};
