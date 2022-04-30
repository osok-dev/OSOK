import { Card, Spacer, Button, Text, Modal, Row } from "@nextui-org/react";
import { useEthers } from "@usedapp/core";
import React, { useState } from "react";
import { BlurredCoverWithConnect } from "../common";

export const ActiveJob: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { account } = useEthers();
  const [visible, setVisible] = React.useState(false);

  const handleSubmit = () => {
    setVisible(true);
  };

  const handleConfirm = () => {
    setVisible(false);
    setLoading(true);
  };
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Card>
      <Spacer />
      <Text h3>Active Job</Text>
      <Spacer />

      <Text h5>Current job on address:</Text>
      <Spacer y={0.5} />

      <Text css={{ fontFamily: "$mono" }}>0x234fds..432342</Text>
      <Text css={{ fontFamily: "$mono" }}>1234 BNB </Text>

      <Spacer />
      <Button disabled={loading} onClick={handleSubmit} shadow color="error">
        {loading ? "Awaiting signature..." : "Cancel Job"}
      </Button>
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
