import { Grid } from "@nextui-org/react";
import { SkeletonTile } from "../common";
import { QuickGuide } from "./quick-guide";

const gridProps = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 4,
};

export const GettingStartedNoAccount: React.FC = () => {
  return (
    <Grid.Container gap={2} css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid {...gridProps}>
        <QuickGuide />
      </Grid>
      <Grid {...gridProps}>
        <SkeletonTile />
      </Grid>
    </Grid.Container>
  );
};
