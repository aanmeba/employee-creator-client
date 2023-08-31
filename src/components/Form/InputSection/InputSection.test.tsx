import { render, screen } from "@testing-library/react";
import InputSection from "./InputSection";

describe("InputSection component", () => {
  it("should render a child component", () => {
    render(<InputSection>Input Section</InputSection>);
    const children = screen.getByText(/input section/i);
    expect(children).toBeInTheDocument();
  });
});
