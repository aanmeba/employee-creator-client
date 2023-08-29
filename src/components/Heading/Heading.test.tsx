import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading component", () => {
  it("should render a child component", () => {
    render(<Heading>Heading</Heading>);
    const children = screen.getByText(/heading/i);
    expect(children).toBeInTheDocument();
  });
});
