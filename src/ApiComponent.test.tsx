import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ApiComponent from "./ApiComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<ApiComponent />);

  const out = await waitFor(() => screen.getByRole("contentinfo"));

  expect(out).toHaveTextContent("Name is Jack");
});
