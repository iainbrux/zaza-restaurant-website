import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { FooterContent } from "./content";

describe("FooterContent unit tests", () => {
  const testTitle = faker.lorem.word();
  const testId = `footer-${faker.lorem.word()}-${faker.lorem.word()}`;
  const testContent = faker.lorem.paragraph();
  const testContentComponent = (
    <p data-testid={testId + "-content"}>{testContent}</p>
  );

  it("Should take custom content and render component", () => {
    render(
      <FooterContent
        content={testContentComponent}
        dataTestId={testId}
        title={testTitle}
      />
    );

    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });

  it("Should take custom content and display it to the user", () => {
    render(
      <FooterContent
        content={testContentComponent}
        dataTestId={testId}
        title={testTitle}
      />
    );

    const title = screen.getByTestId(testId + "-header");
    const content = screen.getByTestId(testId + "-content");

    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(title.textContent).toEqual(testTitle);

    expect(screen.getByText(testContent)).toBeInTheDocument();
    expect(content.textContent).toEqual(testContent);
  });
});
