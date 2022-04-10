import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("rendert with 'Bookmarks Manager' text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bookmarks Manager/i);
  expect(linkElement).toBeInTheDocument();
});
