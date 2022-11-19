import { faStar } from "@fortawesome/free-solid-svg-icons";
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

  it("Should have a small divider with a star icon", () => {
    expect(screen.getByTestId("home-page-video-divider")).toBeInTheDocument();
    expect(screen.getByTestId("home-page-video-divider-icon")).toHaveAttribute(
      "data-icon",
      faStar.iconName
    );
  });

  it("Should have a button that sends users to reservations", () => {
    expect(screen.getByText("BOOK A TABLE")).toBeInTheDocument();
    expect(screen.getByText("BOOK A TABLE")).toHaveAttribute(
      "href",
      "/reservations"
    );
  });
});
