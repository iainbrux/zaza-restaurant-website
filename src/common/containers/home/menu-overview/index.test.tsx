import { render, screen } from "@testing-library/react";
import { MenuOverview } from ".";

describe("Home page menu overview tests", () => {
  it("Should render the menu overview", () => {
    render(<MenuOverview />);

    expect(screen.getByTestId("home-page-menu-overview")).toBeInTheDocument();
  });

  it("Should have the welcome text", () => {
    render(<MenuOverview />);
    const welcomeText = `Welcome to Zaza's and let Zaza's welcome you back with it's pleasant atmosphere, delightful foods & drinks.`;

    expect(
      screen.getByTestId("home-page-menu-overview-welcome").textContent
    ).toEqual(welcomeText);
  });

  it("Should have a small divider", () => {
    render(<MenuOverview />);

    expect(screen.getByTestId("home-page-menu-divider")).toBeInTheDocument();
  });

  it("Should have a chefs section, vegetarian section and wine section", () => {
    render(<MenuOverview />);

    expect(screen.getByText("chef's")).toBeInTheDocument();
    expect(screen.getByText("vegetarian")).toBeInTheDocument();
    expect(screen.getByText("wine")).toBeInTheDocument();
  });

  it("Should have a button that navigates users to see the menu", () => {
    render(<MenuOverview />);

    expect(screen.getByText("see main menu").closest("a")).toHaveAttribute(
      "href",
      "/menu"
    );
  });
});
