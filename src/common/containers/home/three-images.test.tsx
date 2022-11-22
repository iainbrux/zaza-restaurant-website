import { render, screen } from "@testing-library/react";
import { createRef, MutableRefObject } from "react";
import { ThreeImages } from "./three-images";

describe("Three images section tests", () => {
  it("Should render the entire section", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<ThreeImages reference={reference} />);

    expect(screen.getByTestId("home-page-three-images")).toBeInTheDocument();
  });

  it("Should ensure that each image is loaded", () => {
    const reference = createRef() as MutableRefObject<HTMLDivElement | null>;
    render(<ThreeImages reference={reference} />);

    expect(
      screen.getByTestId("home-page-three-images-image-one")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("home-page-three-images-image-two")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("home-page-three-images-image-three")
    ).toBeInTheDocument();
  });
});
