import { render, screen } from "@testing-library/react";
import { MenuCardProperties } from "../menu-card";
import { MenuColumn } from "./menu-column";

describe("Detailed menu column tests", () => {
  const staticMenuItems: MenuCardProperties[] = [
    {
      dataTestId: "item-one",
      item: "item one",
      price: "12.95",
    },
    {
      dataTestId: "item-two",
      description: "a description about this item",
      item: "item two",
      price: "14.95",
    },
    {
      dataTestId: "item-three",
      item: "item three",
      price: "16.95",
      vegetarian: true,
    },
  ];

  it("Should render the component", () => {
    render(
      <MenuColumn
        dataTestId="menu-column"
        menuItems={staticMenuItems}
        title="menu column header"
      />
    );

    expect(screen.getByTestId("menu-column")).toBeInTheDocument();
  });

  it("Should have a title that is displayed", () => {
    render(
      <MenuColumn
        dataTestId="menu-column"
        menuItems={staticMenuItems}
        title="menu column header"
      />
    );

    expect(screen.getByText("menu column header")).toBeInTheDocument();
  });

  it("Should not display a description if one is not provided", () => {
    render(
      <MenuColumn
        dataTestId="menu-column"
        menuItems={staticMenuItems}
        title="menu column header"
      />
    );

    expect(
      screen.queryByTestId("menu-card-item one-description")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("menu-card-item two-description")
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("menu-card-item three-description")
    ).not.toBeInTheDocument();
  });

  it("Should take a list of menu entries and display them", () => {
    render(
      <MenuColumn
        dataTestId="menu-column"
        menuItems={staticMenuItems}
        title="menu column header"
      />
    );

    for (const item of staticMenuItems) {
      expect(screen.getByTestId(item.dataTestId)).toBeInTheDocument();
    }
  });

  it("Should display an orange background for vegetarian items", () => {
    render(
      <MenuColumn
        dataTestId="menu-column"
        menuItems={staticMenuItems}
        title="menu column header"
      />
    );

    expect(screen.getByTestId("item-one").className).not.toContain(
      "bg-orange-200"
    );
    expect(screen.getByTestId("item-two").className).not.toContain(
      "bg-orange-200"
    );
    expect(screen.getByTestId("item-three").className).toContain(
      "bg-orange-200"
    );
  });
});
