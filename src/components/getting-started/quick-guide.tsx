import { Card, Spacer, Text } from "@nextui-org/react";
import React from "react";

export const QuickGuide: React.FC = () => {
  const stepProps = {
    h4: true,
    size: 34,
  };
  return (
    <Card css={{ paddingLeft: 20 }}>
      <Spacer />
      <Text
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 50%",
        }}
        {...stepProps}
      >
        1. Create Escrow &nbsp;&nbsp;&nbsp;&#10132;
      </Text>
      <Spacer />

      <Text
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 50%",
        }}
        {...stepProps}
      >
        2. Deposit Funds
      </Text>
      <Spacer />

      <Text
        css={{
          textGradient: "45deg, $blue500 -20%, $green500 50%",
        }}
        {...stepProps}
      >
        3. Create Job
      </Text>
      <Spacer />
    </Card>
  );
};
