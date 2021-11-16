import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("initial position displays as 0,0", () => {
  const component = render(<App />);

  expect(screen.getByRole("report").textContent).toBe("x: 0 y: 0");
});
