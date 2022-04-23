import { Button, Card, Input, Loading, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import { Text } from "@nextui-org/react";

export const CreateJob: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };
  return (
    <>
      <Card css={{ mw: "400px" }}>
        <Spacer />
        <Text h3>Create Job</Text>
        <Spacer />
        <Input
          type="text"
          label="Contract address"
          placeholder=""
          clearable
          bordered
          disabled={loading}
          contentRight={loading && <Loading size="xs" />}
        />
        <Spacer />
        <Button disabled={loading} onClick={handleSubmit}>
          Submit
        </Button>
        <Spacer />
      </Card>
    </>
  );
};
