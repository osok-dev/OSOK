import {
  Button,
  Card,
  FormElement,
  Input,
  Loading,
  Row,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Text } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import { BlurredCoverWithConnect } from "../common";
import { FiInfo } from "react-icons/fi";
import { useSetTarget } from "../../hooks/useSetTarget";

interface Props {
  escrowExists: boolean;
}

export const CreateJob: React.FC<Props> = ({ escrowExists }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [addressValue, setAddressValue] = useState("");
  // const [slippageValue, setSlippageValue] = useState(12);
  const { state, send: setTarget } = useSetTarget();
  const { status, errorMessage } = state;

  const { account } = useEthers();

  const handleSubmit = () => {
    if (!addressValue) {
      alert("Please provide a contact address");
    } else {
      setLoading(true);
      const target = addressValue;

      setTarget(target);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<FormElement>) => {
    setAddressValue(e.target.value);
  };

  // const handleSlippageChange = (e: React.ChangeEvent<FormElement>) => {
  //   const slippage = Number.parseInt(e.target.value, 10);
  //   setSlippageValue(slippage);
  // };

  // TODO: better handling here
  useEffect(() => {
    if (status === "Exception") {
      setLoading(false);
      alert(`There was an issue making this transaction. ${errorMessage}`);
    } else if (status === "PendingSignature") {
      setLoading(true);
      setLoadingMessage("Pending Signature...");
    } else if (status === "None") {
      setLoading(false);
    } else if (status === "Fail") {
      setLoading(false);
      alert(`There was an issue making this transaction. ${errorMessage}`);
    } else if (status === "Mining") {
      setLoadingMessage("Mining...");
    } else if (status === "Success") {
      setLoading(false);
    }
  }, [status, errorMessage]);

  return (
    <>
      <Card css={{ position: "relative" }}>
        <Spacer />
        <Text h3>
          <Row align="center">
            <>Create Job &nbsp;</>
            <Tooltip content={"This will consume all funds in the escrow"}>
              <FiInfo />
            </Tooltip>
          </Row>
        </Text>

        <Spacer />
        <Input
          type="text"
          label="Contract address"
          value={addressValue}
          onChange={handleAddressChange}
          placeholder=""
          clearable={!loading}
          bordered
          disabled={loading || !escrowExists}
          contentRight={loading && <Loading size="xs" />}
        />
        <Spacer />

        {/* <Input
          type="number"
          step={1}
          min={0}
          label="Slippage (%)"
          value={slippageValue}
          onChange={handleSlippageChange}
          placeholder=""
          bordered
          disabled={loading || !escrowExists}
          contentRight={loading && <Loading size="xs" />}
        /> */}
        <Spacer />
        <Button
          disabled={loading || !escrowExists}
          onClick={handleSubmit}
          shadow
          auto
        >
          {loading ? loadingMessage : "Submit"}
        </Button>
        <Spacer />
        {!account && <BlurredCoverWithConnect />}
      </Card>
    </>
  );
};
