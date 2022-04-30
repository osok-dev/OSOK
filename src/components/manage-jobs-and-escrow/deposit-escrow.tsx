import {
  Card,
  Spacer,
  Input,
  Loading,
  Button,
  Text,
  FormElement,
  Tooltip,
  Row,
} from "@nextui-org/react";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { formatAddress, formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";
import { FiInfo } from "react-icons/fi";
import { utils } from "ethers";
import { useGetVaultAddress } from "../../hooks";

interface Props {
  escrowExists: boolean;
}

export const DepositEscrow: React.FC<Props> = ({ escrowExists }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [value, setValue] = useState(0);
  const { account } = useEthers();
  const { sendTransaction, state } = useSendTransaction();
  const vaultAddress = useGetVaultAddress();
  const { status, errorMessage } = state;

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a deposit amount");
    } else if (!vaultAddress) {
      alert("Error: no vault address");
    } else {
      setLoading(true);
      sendTransaction({
        to: vaultAddress,
        value: utils.parseEther(value.toString()),
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(Number.parseFloat(e.target.value));
  };

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);

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
      setValue(0);
    }
  }, [status, errorMessage]);

  return (
    <Card>
      <Spacer />

      <Text h3>
        <Row align="center">
          <>Deposit to Escrow &nbsp;</>
          <Tooltip content={"Top up the escrow at any time"}>
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
        value={value}
        onChange={handleChange}
        placeholder=""
        bordered
        min={0}
        labelLeft="BNB"
        disabled={loading || !escrowExists}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading || !escrowExists} onClick={handleSubmit} shadow>
        {loading ? loadingMessage : "Deposit"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
