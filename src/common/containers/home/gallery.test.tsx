import { render, screen } from "@testing-library/react";
import { Gallery } from "./gallery";

describe("Home page gallery tests", () => {
  it("Should render the gallery section", () => {
    render(<Gallery />);

    expect(screen.getByTestId("home-page-gallery")).toBeInTheDocument();
  });

  it("Should have the gallery title", () => {
    render(<Gallery />);

    expect(screen.getByText("gallery")).toBeInTheDocument();
  });

  it("Should have a button that users can click to go to the gallery", () => {
    render(<Gallery />);

    expect(screen.getByText("see our gallery").closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
