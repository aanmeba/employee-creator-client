import { render, screen } from "@testing-library/react";
import FieldErrorMessage from "./FieldErrorMessage";

describe("FieldErrorMessage component", () => {
  it("should render a child component", () => {
    render(
      <FieldErrorMessage message="Something went wrong"></FieldErrorMessage>
    );
    const children = screen.getByText(/something went wrong/i);
    expect(children).toBeInTheDocument();
  });
});
