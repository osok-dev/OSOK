import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateJob } from "./create-job";

test("<CreateJob /> should render", () => {
  render(<CreateJob />);
  const linkElement = screen.getByText(/Create Job/i);
  expect(linkElement).toBeInTheDocument();
});
