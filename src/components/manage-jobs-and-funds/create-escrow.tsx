import { Card, Spacer, Input, Loading, Button, Text } from "@nextui-org/react";
import React, { useState } from "react";

export const CreateEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <Card css={{ mw: "400px" }}>
      <Spacer />
      <Text h3>Create Escrow</Text>
      <Spacer />

      <Input
        type="number"
        label="Amount to deposit (optional)"
        placeholder=""
        clearable
        bordered
        labelRight="BNB"
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
      />
      <Spacer />
      <Button disabled={loading} onClick={handleSubmit}>
        Create
      </Button>
      <Spacer />
    </Card>
  );
};
