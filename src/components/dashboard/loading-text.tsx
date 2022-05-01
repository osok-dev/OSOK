import { Loading, Row, Spacer, Text } from "@nextui-org/react";

interface Props {
  text: string;
}
export const LoadingText: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Spacer y={8} />
      <Row justify="center">
        <Text
          weight="bold"
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 50%",
          }}
          size={60}
        >
          {text}
          &nbsp;
          <Loading
            css={{
              color: "$red500",
            }}
            color="error"
            size="md"
          />
        </Text>
      </Row>
    </>
  );
};
