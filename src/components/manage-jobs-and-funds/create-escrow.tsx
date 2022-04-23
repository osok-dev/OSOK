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

export const CreateEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setLoading(true);
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

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
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
      />
      <Spacer />
      <Button disabled={loading} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Create"}
      </Button>
      <Spacer />
    </Card>
  );
};
