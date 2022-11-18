import { render, screen } from "@testing-library/react";
import { Reservations } from ".";

describe("Reservations page tests", () => {
  beforeEach(() => {
    render(<Reservations />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
