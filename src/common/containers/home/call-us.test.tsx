import { render, screen } from "@testing-library/react";
import { CallUs } from "./call-us";

describe("Home page call us tests", () => {
  it("Should render the call us section", () => {
    render(<CallUs />);

    expect(screen.getByTestId("home-page-call-us")).toBeInTheDocument();
  });

  it("Should contain the contact number", () => {
    render(<CallUs />);

    expect(screen.getByTestId("home-page-call-us").textContent).toContain(
      "01925 657 287"
    );
  });
});
