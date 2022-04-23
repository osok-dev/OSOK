import React, { useEffect, useRef } from "react";
import { useEthers } from "@usedapp/core";
// @ts-ignore TODO: fix
import Jazzicon from "@metamask/jazzicon";
import styled from "styled-components";

const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
`;

export const Identicon: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { account } = useEthers();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return (
    <div>
      <StyledIdenticon ref={ref as any} />
    </div>
  );
};
