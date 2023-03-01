// packages
import { render, screen } from "@testing-library/react";
// local UI component
import Greet from "./Greet";
/* ********************************** Test ********************************** */
test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("hello");
  expect(textElement).toBeInTheDocument();
});

// test Driven Development (TDD) :
// test Driven development is software development process where you write tests before writing the software code.
// once the tests have been written , you then write the code to ensure the tests pass
