import { render, screen } from "@testing-library/react";
import { ReserveNow } from "./reserve-now";

describe("Home page reserve now tests", () => {
  it("Should render the reserve now section", () => {
    render(<ReserveNow />);

    expect(screen.getByText("reserve now")).toBeInTheDocument();
  });

  it("Should have a button users can click to take them to the reservations page", () => {
    render(<ReserveNow />);

    expect(screen.getByText("make a reservation").closest("a")).toHaveAttribute(
      "href",
      "/reservations"
    );
  });
});
