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

export const DepositEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

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

  return (
    <Card>
      <Spacer />
      <Text h3>Deposit To Escrow</Text>
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
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
      />
      <Spacer />
      <Button disabled={loading} onClick={handleSubmit}>
        {loading ? "Awaiting signature..." : "Deposit"}
      </Button>
      <Spacer />
    </Card>
  );
};
