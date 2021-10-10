import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name="David" />);
  const linkElement = screen.getByText(/Name is David/i);
  expect(linkElement).toBeInTheDocument();

  const elementByRole = screen.getByRole("contentinfo");
  expect(elementByRole).toHaveTextContent("Name is David");
  expect(elementByRole).toHaveAttribute("role", "contentinfo");
});
