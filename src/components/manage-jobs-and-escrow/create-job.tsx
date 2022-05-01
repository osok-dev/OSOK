import {
  Card,
  FormElement,
  Input,
  Loading,
  Row,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import React, { useCallback, useState } from "react";
import { Text } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import { BlurredCoverWithConnect, TransactionButton } from "../common";
import { FiInfo } from "react-icons/fi";
import { useSetTarget } from "../../hooks/useSetTarget";

export const CreateJob: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [addressValue, setAddressValue] = useState("");
  const { state, send: setTarget } = useSetTarget();

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

  const handleOnSuccess = useCallback(() => {
    setAddressValue("");
  }, []);

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
          disabled={loading}
          contentRight={loading && <Loading size="xs" />}
        />
        <Spacer />
        <Spacer />
        <TransactionButton
          text={"Submit"}
          loading={loading}
          setLoading={setLoading}
          state={state}
          handleSubmit={handleSubmit}
          onSuccess={handleOnSuccess}
        />
        <Spacer />
        {!account && <BlurredCoverWithConnect />}
      </Card>
    </>
  );
};
