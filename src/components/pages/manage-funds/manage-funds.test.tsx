import React from "react";
import { render, screen } from "@testing-library/react";
import { ManageFunds } from "./manage-funds";

test("<ManageFunds /> should render", () => {
  render(<ManageFunds />);
  const linkElement = screen.getByText(/Manage Funds/i);
  expect(linkElement).toBeInTheDocument();
});
