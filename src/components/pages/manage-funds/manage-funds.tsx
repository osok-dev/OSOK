import { Button, Input } from "@nextui-org/react";
import React from "react";

export const ManageFunds: React.FC = () => {
  return (
    <>
      <h1>Manage Funds</h1>

      <hr></hr>
      <h2>Create escrow</h2>

      <Input
        type="number"
        label="Amount to deposit (optional)"
        placeholder=""
        clearable
        bordered
        labelRight="BNB"
      />

      <Button>Create</Button>

      <br />

      <h2>Deposit to escrow</h2>

      <Input
        type="number"
        label="Amount to deposit"
        placeholder=""
        clearable
        bordered
        labelRight="BNB"
      />

      <Button>Deposit</Button>

      <br />

      <h2>Withdraw from escrow</h2>

      <Input
        type="number"
        label="Amount to withdraw"
        placeholder=""
        clearable
        bordered
        labelRight="BNB"
      />

      <Button>Withdraw</Button>
    </>
  );
};
