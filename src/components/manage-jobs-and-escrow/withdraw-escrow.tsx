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
import { useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { useEscrowBalance } from "../../hooks";
import { formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";
import { FiInfo } from "react-icons/fi";

interface Props {
  escrowExists: boolean;
}

export const WithdrawEscrow: React.FC<Props> = ({ escrowExists }) => {
  const [loading, setLoading] = useState(false);
  const { account } = useEthers();
  const [value, setValue] = useState("");
  const escrowBalance = useEscrowBalance();
  const balanceDisplayValue = formatBalance(escrowBalance);

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a withdraw amount");
    } else {
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  return (
    <Card>
      <Spacer />
      <Text h3></Text>
      <Text h3>
        <Row align="center">
          <>Withdraw from Escrow &nbsp;</>
          <Tooltip content={"This will withdraw all funds"}>
            <FiInfo />
          </Tooltip>
        </Row>
      </Text>
      <Spacer />
      <Input
        type="number"
        label="Amount to withdraw"
        placeholder=""
        value={value}
        onChange={handleChange}
        clearable={!loading}
        bordered
        labelLeft="BNB"
        disabled={loading || !escrowExists}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Escrow balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading || !escrowExists} onClick={handleSubmit} shadow>
        {loading ? "Awaiting signature..." : "Withdraw"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
