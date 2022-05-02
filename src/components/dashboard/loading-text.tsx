import { Loading, Row, Spacer, Text } from "@nextui-org/react";

interface Props {
  text: string;
}
export const LoadingText: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Spacer y={8} />
      <Row justify="center" align="baseline">
        <Text
          weight="bold"
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 50%",
          }}
          size={60}
        >
          {text}
        </Text>
        <Loading
          css={{
            color: "$red500",
            marginLeft: 20,
          }}
          color="error"
          size="md"
        />
      </Row>
    </>
  );
};
