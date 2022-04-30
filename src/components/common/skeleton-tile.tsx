import { Card, Spacer, Input, Button, Text, Row } from "@nextui-org/react";
import React from "react";
import { BlurredCoverWithConnect } from ".";
import { FiInfo } from "react-icons/fi";

export const SkeletonTile: React.FC = () => {
  return (
    <Card>
      <Spacer />
      <Text h3></Text>
      <Text h3>
        <Row align="center">
          <>Skeleton Tile &nbsp;</>
          <FiInfo />
        </Row>
      </Text>
      <Spacer />
      <Input
        type="number"
        label="Amount to withdraw"
        placeholder=""
        bordered
        labelLeft="BNB"
        helperText={`Escrow balance: 0`}
      />
      <Spacer y={2} />
      <Button shadow>"Withdraw"</Button>
      <Spacer />
      <BlurredCoverWithConnect />
    </Card>
  );
};
