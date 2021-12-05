import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("initial position displays as 0,0", () => {
  render(<App />);

  expect(screen.getByText(/x:/i).textContent).toBe("x: 0 y: 0");
});
