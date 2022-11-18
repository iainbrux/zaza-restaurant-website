import { render, screen } from "@testing-library/react";
import { About } from ".";

describe("About page tests", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
