import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home page tests", () => {
  it("Should render the nav bar", () => {
    render(<Home />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    render(<Home />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
