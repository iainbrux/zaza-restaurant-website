import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { render, screen } from "@testing-library/react";
import { SmallDivider } from "./small-divider";

describe("Small divider tests", () => {
  it("Renders the divider", () => {
    render(<SmallDivider dataTestId="small-divider" />);

    expect(screen.getByTestId("small-divider")).toBeInTheDocument();
  });

  it("Ensures the star is displayed as default", () => {
    render(<SmallDivider dataTestId="small-divider" />);

    expect(screen.getByTestId("small-divider-icon")).toHaveAttribute(
      "data-icon",
      faStar.iconName
    );
  });

  it("Can have a custom icon provided and render that icon instead", () => {
    render(<SmallDivider dataTestId="small-divider" icon={faGithub} />);

    expect(screen.getByTestId("small-divider-icon")).toHaveAttribute(
      "data-icon",
      faGithub.iconName
    );
    expect(screen.getByTestId("small-divider-icon")).not.toHaveAttribute(
      "data-icon",
      "star"
    );
  });
});
