import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("Player is rendered", () => {
  const { getByText } = render(<App />);

  getByText(/Players/i);
});
