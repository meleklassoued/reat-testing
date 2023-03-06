/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// packages
import { render, screen } from "@testing-library/react";
import Application from "./Application";
describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // page heading
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    // paragraph
    const paragraphElement = screen.getByText("aslema chabeb");
    expect(paragraphElement).toBeInTheDocument();
    // display Value : select input
    const inputValueElement = screen.getByDisplayValue("melek");
    expect(inputValueElement).toBeInTheDocument();
    // section heading
    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();
    // Text Input
    const nameElement = screen.getByPlaceholderText("Name");
    expect(nameElement).toBeInTheDocument();
    // Text Input 2
    const bioElement = screen.getByLabelText("bio");
    expect(bioElement).toBeInTheDocument();
    // select Input :
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    // checkbox Input :
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
    // submit button:
    const sbumitButtonElement = screen.getByRole("button");
    expect(sbumitButtonElement).toBeInTheDocument();
  });
});

// ?getByRole options :
// name;
// level;
// hidden;
// selected;
// checked;
// pressed;
