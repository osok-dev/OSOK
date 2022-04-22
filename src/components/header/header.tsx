import React from "react";

import { Navigation } from "./navigation";
import { WalletConnect } from "./wallet-connect";

export const Header: React.FC = () => {
  return (
    <div>
      <Navigation />
      <WalletConnect />
    </div>
  );
};
