import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Image } from ".";

describe("Detailed Image component tests", () => {
  it("should render the image component", () => {
    render(
      <Image
        alt=""
        dataTestId="component-test"
        source="/small-placeholder.jpg"
      />
    );

    expect(screen.getByTestId("component-test")).toBeInTheDocument();
  });

  it("Should render the small-placeholder image", () => {
    render(
      <Image
        alt=""
        dataTestId="component-test"
        source="/small-placeholder.jpg"
      />
    );

    expect(screen.getByTestId("component-test-source")).toHaveAttribute(
      "srcset",
      "/small-placeholder.jpg"
    );
  });

  it("Should use the custom css values provided for the image if provided", () => {
    render(
      <Image
        alt=""
        customCss="some-css-in-here"
        dataTestId="component-test"
        source="/small-placeholder.jpg"
      />
    );

    expect(screen.getByTestId("component-test-image").className).not.toContain(
      "object-cover w-full h-full"
    );
  });

  it("Should take custom data and display correctly", () => {
    const alt = faker.lorem.sentence();
    const dataTestId = faker.lorem.word();
    const source = `/${faker.lorem.word()}`;

    render(<Image alt={alt} dataTestId={dataTestId} source={source} />);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestId + "-source")).toHaveAttribute(
      "srcset",
      source
    );
    expect(screen.getByTestId(dataTestId + "-image")).toHaveAttribute(
      "alt",
      alt
    );
  });
});
