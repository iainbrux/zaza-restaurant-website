import { render, screen } from "@testing-library/react";
import { AboutUsOverview } from ".";

describe("Home page about us section tests", () => {
  it("Should render the about us section", () => {
    render(<AboutUsOverview />);

    expect(screen.getByTestId("about-us-overview")).toBeInTheDocument();
  });

  it("Should have the welcome message", () => {
    render(<AboutUsOverview />);

    expect(
      screen.getByTestId("about-us-overview-welcome").textContent
    ).toContain(
      "Welcome to Zaza's and let Zaza's welcome you back withit's pleasant atmosphere, delightful foods & drinks."
    );
  });

  it("Should have a small divider component", () => {
    render(<AboutUsOverview />);

    expect(screen.getByTestId("about-us-overview-divider")).toBeInTheDocument();
  });

  it("Should have an opening times section", () => {
    render(<AboutUsOverview />);

    expect(screen.getByText("opening times")).toBeInTheDocument();
    expect(
      screen.getByTestId("about-us-overview-opening-times-monday")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("about-us-overview-opening-times-tuesday-saturday")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("about-us-overview-opening-times-sunday")
    ).toBeInTheDocument();
  });
});
