import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// ? test(name,fn,timeout):
// the first argument is the test name used to identify the test
// the second argument is a function that contains the expectations to test
// the third argument is timeout which is an optional argument specifying how long to wait before aborting the test /the default timeout value is 5 second
