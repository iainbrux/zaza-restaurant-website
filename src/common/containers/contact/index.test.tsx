import { render, screen } from "@testing-library/react";
import { Contact } from ".";

describe("Contact page tests", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("Should render the nav bar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
