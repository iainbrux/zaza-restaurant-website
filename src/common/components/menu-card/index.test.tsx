import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { MenuCard } from ".";

describe("Menu card tests", () => {
  it("Should render into the dom", () => {
    render(<MenuCard dataTestId="menu-card" item="shashlik" price="12.95" />);

    expect(screen.getByTestId("menu-card")).toBeInTheDocument();
  });

  it("Should take a custom menu entry and display", () => {
    const item = faker.lorem.word();
    const price = faker.finance.amount();
    const testId = faker.lorem.word();

    render(<MenuCard dataTestId={testId} item={item} price={price} />);

    expect(screen.getByText(item)).toBeInTheDocument();
    expect(screen.getByText(`£${price}`)).toBeInTheDocument();
  });
});
