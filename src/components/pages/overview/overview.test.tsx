import React from "react";
import { render, screen } from "@testing-library/react";
import { Overview } from "./overview";

test("<Overview /> should render", () => {
  render(<Overview />);
  const linkElement = screen.getByText(/Overview/i);
  expect(linkElement).toBeInTheDocument();
});
