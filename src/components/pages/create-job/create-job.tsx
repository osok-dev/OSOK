import React from "react";

export const CreateJob: React.FC = () => {
  return (
    <>
      <h1>Create Job</h1>

      <label>
        Contract address
        <input type="text" />
      </label>
      <button>Submit</button>
    </>
  );
};
