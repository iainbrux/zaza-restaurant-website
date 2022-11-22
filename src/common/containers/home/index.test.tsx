import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home page tests", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the landing section", () => {
    expect(screen.getByTestId("landing-section")).toBeInTheDocument();
  });

  it("Should render the three images section", () => {
    expect(screen.getByTestId("home-page-three-images")).toBeInTheDocument();
  });

  it("Should render the menu overview section", () => {
    expect(screen.getByTestId("home-page-menu-overview")).toBeInTheDocument();
  });

  it("Should render the cooked to perfection section", () => {
    expect(screen.getByText("cooked to perfection")).toBeInTheDocument();
  });

  it("Should render the gallery overview section", () => {
    expect(screen.getByTestId("home-page-gallery")).toBeInTheDocument();
  });

  it("Should render the about us overview", () => {
    expect(screen.getByTestId("about-us-overview-divider")).toBeInTheDocument();
  });

  it("Should render the call us section", () => {
    expect(screen.getByTestId("home-page-call-us")).toBeInTheDocument();
  });

  it("Should render the reserve now section", () => {
    expect(screen.getByTestId("reserve-now-section")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
