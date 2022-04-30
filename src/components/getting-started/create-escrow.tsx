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
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { useCreateVault } from "../../hooks";
import { formatBalance } from "../../utils";
import { BlurredCoverWithConnect } from "../common";
import { utils } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { balanceToFloat } from "../../utils/balance-to-float";

export const CreateEscrow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [value, setValue] = useState(0);
  const { account } = useEthers();
  const { state, send } = useCreateVault();

  console.log(state);

  const { status, transaction, receipt, errorMessage, originalTransaction } =
    state;

  const handleSubmit = () => {
    setLoading(true);

    console.log("creating vault handleSubmit");
    if (value) {
      console.log(value);
      const depositAmount = utils.parseEther(value.toString());
      send({ value: depositAmount });
    } else {
      send();
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const depositAmount = Number.parseFloat(e.target.value);
    setValue(depositAmount);
  };

  // TODO: better handling here
  useEffect(() => {
    console.log("\n\n", status);

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
      setLoading(true);
    }
  }, [status, errorMessage]);

  const etherBalance = useEtherBalance(account);
  const balanceDisplayValue = formatBalance(etherBalance);
  const maxDeposit = balanceToFloat(etherBalance);

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
        bordered
        max={maxDeposit}
        min={0}
        labelLeft="BNB"
        disabled={loading}
        contentRight={loading && <Loading size="xs" />}
        helperText={`Wallet balance: ${balanceDisplayValue}`}
      />
      <Spacer y={2} />
      <Button disabled={loading} onClick={handleSubmit} shadow>
        {loading ? loadingMessage : "Create"}
      </Button>
      <Spacer />
      {!account && <BlurredCoverWithConnect />}
    </Card>
  );
};
