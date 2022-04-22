import React from "react";

export const ManageFunds: React.FC = () => {
  return (
    <>
      <h1>Manage Funds</h1>

      <hr></hr>
      <h2>Create escrow</h2>
      <label>
        Amount to deposit (optional)
        <input type="text" />
      </label>
      <button>Create</button>

      <br />

      <h2>Deposit to escrow</h2>
      <label>
        Amount to deposit
        <input type="text" />
      </label>
      <button>Deposit</button>

      <br />

      <h2>Withdraw from escrow</h2>
      <label>
        Amount to withdraw
        <input type="text" />
      </label>
      <button>Withdraw</button>
    </>
  );
};
