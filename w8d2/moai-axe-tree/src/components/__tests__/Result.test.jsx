import Result from "../Result";
import { render } from "@testing-library/react";

describe("Testing the Result component", () => {
  it("should show 'Waiting for your choice!' when no input has been given", () => {
    const expectedResult = "Waiting for your choice!";
    const { queryByText } = render(<Result />);

    const result = queryByText(expectedResult);

    expect(result).toBeInTheDocument();
  });
  it("should show 'TRY AGAIN!' when it's a tie", () => {
    const expectedResult = "TRY AGAIN!";
    const { queryByText } = render(<Result message={expectedResult} />);

    const result = queryByText(expectedResult);

    expect(result).toBeInTheDocument();
  });
  it("should show 'SKYNET HAS WON ONCE AGAIN' when the computer wins", () => {
    const expectedResult = "SKYNET HAS WON ONCE AGAIN";
    const { queryByText } = render(<Result message={expectedResult} />);

    const result = queryByText(expectedResult);

    expect(result).toBeInTheDocument();
  });
  it("should show 'HUMANS WON... FOR NOW...' when the player wins", () => {
    const expectedResult = "HUMANS WON... FOR NOW...";
    const { queryByText, getByText } = render(<Result message={expectedResult} />);

    const result = queryByText(expectedResult);
    const originalMessage = queryByText("Waiting for your choice!");

    expect(result).toBeInTheDocument();
    expect(originalMessage).not.toBeInTheDocument();
  });
});

// Querying, getting

// Do you have a chicken?
// I'm gonna grab the chicken
