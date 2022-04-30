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
import React, { useEffect, useState } from "react";
import {
  useGetVaultAddress,
  useVaultBalance,
  useWithdrawFromVault,
} from "../../hooks";
import { formatAddress, formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";
import { FiInfo } from "react-icons/fi";
import { utils } from "ethers";

interface Props {
  escrowExists: boolean;
}

export const WithdrawEscrow: React.FC<Props> = ({ escrowExists }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const { send, state } = useWithdrawFromVault();

  const { status, errorMessage } = state;

  const { account } = useEthers();
  const [value, setValue] = useState(0);
  const escrowBalance = useVaultBalance();
  const balanceDisplayValue = formatBalance(escrowBalance);
  const vaultAddress = useGetVaultAddress();

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a withdraw amount");
    } else {
      setLoading(true);

      const amount = utils.parseEther(value.toString());
      send(amount);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(Number.parseFloat(e.target.value));
  };

  useEffect(() => {
    console.log("status", status);
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
      setValue(0);
    }
  }, [status, errorMessage]);

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
        label={`Amount to deposit. (vault addr: ${formatAddress(
          vaultAddress
        )})`}
        placeholder=""
        value={value}
        onChange={handleChange}
        bordered
        min={0}
        // max={} todo
        labelLeft="BNB"
        disabled={loading || !escrowExists}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Escrow balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading || !escrowExists} onClick={handleSubmit} shadow>
        {loading ? loadingMessage : "Withdraw"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
