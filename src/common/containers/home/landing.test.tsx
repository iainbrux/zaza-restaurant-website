import { faStar } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import { createRef, MutableRefObject } from "react";
import { Landing } from "./landing";

describe("Home page landing section tests", () => {
  it("Should render the landing page", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<Landing reference={reference} />);

    expect(screen.getByTestId("landing-section")).toBeInTheDocument();
  });

  it("Should have a video background", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<Landing reference={reference} />);

    expect(screen.getByTestId("home-page-video")).toBeInTheDocument();
  });

  it("Should have a small divider with a star icon", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<Landing reference={reference} />);

    expect(screen.getByTestId("home-page-video-divider")).toBeInTheDocument();
    expect(screen.getByTestId("home-page-video-divider-icon")).toHaveAttribute(
      "data-icon",
      faStar.iconName
    );
  });

  it("Should have a button that sends users to reservations", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<Landing reference={reference} />);

    expect(screen.getByText("book a table")).toBeInTheDocument();
    expect(screen.getByText("book a table")).toHaveAttribute(
      "href",
      "/reservations"
    );
  });
});
