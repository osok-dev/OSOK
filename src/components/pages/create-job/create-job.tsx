import { Button, Input } from "@nextui-org/react";
import React from "react";

export const CreateJob: React.FC = () => {
  return (
    <>
      <h1>Create Job</h1>

      <Input
        type="text"
        label="Contract address"
        placeholder=""
        clearable
        bordered
      />

      <Button>Submit</Button>
    </>
  );
};
