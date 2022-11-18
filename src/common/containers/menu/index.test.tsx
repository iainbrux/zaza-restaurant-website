import { render, screen } from "@testing-library/react";
import { Menu } from ".";

describe("Menu page tests", () => {
  beforeEach(() => {
    render(<Menu />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
