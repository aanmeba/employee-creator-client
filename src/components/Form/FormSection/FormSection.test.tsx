import { render, screen } from "@testing-library/react";
import FormSection from "./FormSection";

describe("FormSection component", () => {
  it("should render a child component", () => {
    render(<FormSection>Form Section</FormSection>);
    const children = screen.getByText(/form section/i);
    expect(children).toBeInTheDocument();
  });
});
