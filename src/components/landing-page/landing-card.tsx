import { Card, Col, Text } from "@nextui-org/react";
import React from "react";

interface Props {
  header1: string;
  header2: string;
  imgSrc: string;
  flipImage?: boolean;
}
export const LandingCard: React.FC<Props> = ({
  header1,
  header2,
  imgSrc,
  flipImage,
}) => {
  return (
    <Card cover>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 20, left: 15 }}>
        <Col>
          <Text size={16} weight="bold" transform="uppercase" color="#ffffffCC">
            {header1}
          </Text>
          <Text h4 size={24} color="white">
            {header2}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={imgSrc}
        height={160}
        width="100%"
        alt="Card image background"
        css={{
          transform: `rotate(${flipImage ? "180" : "0"}deg)`,
        }}
      />
    </Card>
  );
};
