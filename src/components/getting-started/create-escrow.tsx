import {
  Card,
  Spacer,
  Input,
  Loading,
  Button,
  Text,
  FormElement,
  Row,
  Tooltip,
} from "@nextui-org/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";

export const CreateEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { account } = useEthers();

  const handleSubmit = () => {
    setLoading(true);
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);

  return (
    <Card>
      <Spacer />
      <Text h3></Text>
      <Text h3>
        <Row align="center">
          <>1. Create Escrow &nbsp;</>
          <Tooltip content={"You can deposit funds now or later"}>
            <FiInfo />
          </Tooltip>
        </Row>
      </Text>
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
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Create"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
