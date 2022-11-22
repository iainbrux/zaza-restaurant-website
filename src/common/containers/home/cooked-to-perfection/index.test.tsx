import { render, screen } from "@testing-library/react";
import { CookedToPerfection } from ".";

describe("Cooked to perfection parallax tests", () => {
  it("Should render the parallax", () => {
    render(<CookedToPerfection />);

    expect(screen.getByText("cooked to perfection")).toBeInTheDocument();
  });

  it("Should have a background image", () => {
    render(<CookedToPerfection />);

    expect(screen.getByTestId("cooked-to-perfection").className).toContain(
      "bg-[url"
    );
  });

  it("Should have a button that users can click to book a table", () => {
    render(<CookedToPerfection />);

    expect(screen.getByText("book a table")).toBeInTheDocument();
    expect(screen.getByText("book a table").closest("a")).toHaveAttribute(
      "href",
      "/reservations"
    );
  });
});
