import styled from "styled-components";
import React from "react";

export const Root = styled.div`
  opacity: 1;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  backdrop-filter: saturate(180%) blur(5px);
  background: rgba(150, 150, 150, 0.1);
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
`;

const ChildrenContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BlurredCover: React.FC = ({ children }) => {
  if (children) {
    return (
      <Root>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Root>
    );
  }
  return <Root />;
};
