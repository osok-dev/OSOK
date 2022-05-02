import { Card, Spacer, Button, Text, Modal, Row } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { useVaultBalance, useTargetAddress, useSetTarget } from "../../hooks";
import { formatBalance } from "../../utils";
import { BlurredCoverWithConnect, TransactionButton } from "../common";

export const ActiveJob: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { account } = useEthers();
  const [visible, setVisible] = React.useState(false);
  const { state, send: setTarget } = useSetTarget();

  const targetAddress = useTargetAddress();
  const escrowBalance = useVaultBalance();
  const balanceDisplayValue = formatBalance(escrowBalance);

  const handleSubmit = () => {
    setVisible(true);
  };

  const handleConfirm = () => {
    setVisible(false);
    setLoading(true);

    const target = "0x0000000000000000000000000000000000000000";

    setTarget(target);
  };
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Card>
      <Spacer />
      <Text h3>Active Job</Text>
      <Spacer />

      <Text h5>Target:</Text>
      <Spacer y={0.5} />

      <Text css={{ fontFamily: "$mono" }}>{targetAddress}</Text>
      <Text css={{ fontFamily: "$mono" }}>{balanceDisplayValue}</Text>

      <Spacer />

      <TransactionButton
        text={"Cancel Job"}
        loading={loading}
        setLoading={setLoading}
        state={state}
        handleSubmit={handleSubmit}
        color="error"
      />
      <Spacer />
      {!account && <BlurredCoverWithConnect />}

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        blur
      >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Are you sure you want to cancel the job?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row align="center" justify="space-evenly">
            <Button auto shadow onClick={closeHandler}>
              No, go back
            </Button>
            <Button auto shadow color="error" onClick={handleConfirm}>
              Yes, cancel job
            </Button>
          </Row>
          <Spacer />
        </Modal.Body>
      </Modal>
    </Card>
  );
};
