
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the My Recipe Gallery heading", () => {
  render(<App />);
  // Look for the header text you added in App.js:
  const heading = screen.getByText(/My Recipe Gallery/i);
  expect(heading).toBeInTheDocument();
});
