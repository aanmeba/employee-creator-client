import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label component", () => {
  it("should render a test", () => {
    render(
      <div>
        <p>hello</p>
      </div>
    );

    const para = screen.getByText("hello");
    expect(para).toBeInTheDocument();
  });

  it("should render a child component", () => {
    render(<Label>Hello World</Label>);
    const children = screen.getByText(/hello world/i);
    expect(children).toBeInTheDocument();
  });
});
