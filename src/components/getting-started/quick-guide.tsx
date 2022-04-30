import { Card, Spacer, Text } from "@nextui-org/react";
import React from "react";

export const QuickGuide: React.FC = () => {
  const stepProps = {
    h4: true,
    size: 34,
  };
  return (
    <Card>
      <Spacer />
      <Text {...stepProps}>1. Create Escrow</Text>
      <Spacer />

      <Text {...stepProps}>2. Deposit Funds</Text>
      <Spacer />

      <Text {...stepProps}>3. Create Job</Text>
      <Spacer />
    </Card>
  );
};
