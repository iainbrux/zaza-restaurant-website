import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home page tests", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("Should have a video background", () => {
    expect(screen.getByTestId("home-page-video")).toBeInTheDocument();
  });
});
