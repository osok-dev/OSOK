import {
  Button,
  Card,
  FormElement,
  Input,
  Loading,
  Spacer,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Text } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import { BlurredCoverWithConnect } from "../common";

interface Props {
  escrowExists: boolean;
}

export const CreateJob: React.FC<Props> = ({ escrowExists }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { chainId, account } = useEthers();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a contact address");
    } else {
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  const correctChain = chainId === 56;

  return (
    <>
      <Card css={{ position: "relative" }}>
        <Spacer />
        <Text h3>Create Job</Text>
        <Spacer />
        <Input
          type="text"
          label="Contract address"
          value={value}
          onChange={handleChange}
          placeholder=""
          clearable={!loading}
          bordered
          disabled={loading || !escrowExists}
          contentRight={loading && <Loading size="xs" />}
          helperText={
            correctChain
              ? "BNB Mainnet only"
              : "WARNING: Not connected to BNB mainnet"
          }
          color={correctChain ? "default" : "error"}
        />
        <Spacer y={2} />
        <Button
          disabled={loading || !escrowExists}
          onClick={handleSubmit}
          shadow
          auto
        >
          {loading ? "Awaiting signature..." : "Submit"}
        </Button>
        <Spacer />
        {!account && <BlurredCoverWithConnect />}
      </Card>
    </>
  );
};
