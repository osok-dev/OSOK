import { Card, Spacer, Input, Loading, Button, Text } from "@nextui-org/react";
import React, { useState } from "react";

export const WithdrawEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <Card css={{ mw: "400px" }}>
      <Spacer />
      <Text h3>Withdraw From Escrow</Text>
      <Spacer />

      <Input
        type="number"
        label="Amount to withdraw"
        placeholder=""
        clearable
        bordered
        labelRight="BNB"
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
      />
      <Spacer />
      <Button disabled={loading} onClick={handleSubmit}>
        Withdraw
      </Button>
      <Spacer />
    </Card>
  );
};
