import Game from "../Game";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Testing the Game component", () => {
  it("should show the default message on first load", () => {
    const { getByText, queryByText } = render(<Game />);

    const defaultMessage = queryByText("Waiting for your choice!");

    expect(defaultMessage).toBeInTheDocument();
  });
  it("should show that the computer won when cheating, when the player selects an option", () => {
    const { getByText, queryByText, queryByTestId } = render(<Game />);

    const defaultMessage = queryByText("Waiting for your choice!");
    expect(defaultMessage).toBeInTheDocument();

    const moaiButton = queryByTestId("moai");
    expect(moaiButton).toBeInTheDocument();

    fireEvent.click(moaiButton);

    waitForElement(() => queryByText("SKYNET HAS WON ONCE AGAIN")).then(() => {
      const resultMessage = queryByText("SKYNET HAS WON ONCE AGAIN");
      expect(resultMessage).toBeInTheDocument();
      expect(defaultMessage).not.toBeInTheDocument();
    });
  });

  it("should turn off the computer if we click on it", () => {
    const { getByText, queryByText } = render(<Game />);

    const robot = queryByText("🤖");

    expect(robot).toHaveClass("cheating");

    fireEvent.click(robot);

    expect(robot).not.toHaveClass("cheating");
  });
});
