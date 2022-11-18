import { render, screen } from "@testing-library/react";
import { NavigationBar } from ".";

describe("Navbar tests", () => {
  const links = ["HOME", "MENU", "ABOUT", "CONTACT", "RESERVATIONS"] as const;

  beforeEach(() => {
    render(<NavigationBar />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should display all the links", () => {
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument();
    }
  });

  it("Should have an href for each link", () => {
    for (const link of links) {
      expect(screen.getByText(link).closest("a")).toHaveAttribute(
        "href",
        `${link === "HOME" ? "/" : `/${link.toLocaleLowerCase()}`}`
      );
    }
  });

  it("Should display the logo", () => {
    expect(screen.getByTestId("nav-logo")).toBeInTheDocument();
  });

  it("Should have an alt text for logo accessibility", () => {
    expect(screen.getByTestId("nav-logo")).toHaveAttribute("alt", "logo ipsum");
  });
});
