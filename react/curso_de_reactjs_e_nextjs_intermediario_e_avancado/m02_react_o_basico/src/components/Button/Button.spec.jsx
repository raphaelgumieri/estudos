/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import userEvent from "@testing-library/user-event";
import Button from ".";
const { render, screen } = require("@testing-library/react");

describe("<Button />", () => {
  it("should render the button with the text 'Load more'", () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Load more</Button>);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Load more</Button>);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it("should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button disabled onClick={fn}>Load more</Button>);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });
});
