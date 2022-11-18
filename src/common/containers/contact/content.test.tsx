import { render, screen } from "@testing-library/react";
import { Content } from "./content";

describe("Main contact content tests", () => {
  it("Should render the main content", () => {
    render(<Content />);

    expect(screen.getByTestId("contact-main-region")).toBeInTheDocument();
  });
});
