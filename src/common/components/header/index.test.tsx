import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header tests", () => {
  it("Should render the header", () => {
    render(<Header title="A test title" />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("Display with custom title", () => {
    const title = faker.lorem.word();

    render(<Header title={title} />);

    expect(screen.getByTestId("header-title").textContent).toEqual(title);
  });
});
