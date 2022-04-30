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
  const [addressValue, setAddressValue] = useState("");
  const [slippageValue, setSlippageValue] = useState(0);
  const { account } = useEthers();

  const handleSubmit = () => {
    if (!addressValue) {
      alert("Please provide a contact address");
    } else {
      setLoading(true);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<FormElement>) => {
    setAddressValue(e.target.value);
  };

  const handleSlippageChange = (e: React.ChangeEvent<FormElement>) => {
    const slippage = Number.parseInt(e.target.value, 10);
    setSlippageValue(slippage);
  };

  return (
    <>
      <Card css={{ position: "relative" }}>
        <Spacer />
        <Text h3>Create Job</Text>
        <Spacer />
        <Input
          type="text"
          label="Contract address"
          value={addressValue}
          onChange={handleAddressChange}
          placeholder=""
          clearable={!loading}
          bordered
          // disabled={loading || !escrowExists}
          contentRight={loading && <Loading size="xs" />}
        />
        <Spacer />

        <Input
          type="number"
          label="Slippage (%)"
          value={slippageValue}
          onChange={handleSlippageChange}
          placeholder=""
          clearable={!loading}
          bordered
          // disabled={loading || !escrowExists}
          contentRight={loading && <Loading size="xs" />}
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
