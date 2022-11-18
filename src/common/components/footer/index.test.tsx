import { act, fireEvent, render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer integration tests", () => {
  it("Should render the footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("Should display the restaurant contact information in the footer", () => {
    render(<Footer />);

    const contactHeader = "Contact";
    const contactEmail = "booking@istanbulgrillwarrington.co.uk";
    const contactNumber = "01925 657 287";

    expect(screen.getByTestId("footer-contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer-contact-header").textContent).toEqual(
      contactHeader
    );
    expect(screen.getByTestId("footer-contact-content").textContent).toContain(
      contactEmail
    );
    expect(screen.getByTestId("footer-contact-content").textContent).toContain(
      contactNumber
    );
  });

  it("Should display the restaurant address in the footer", () => {
    render(<Footer />);

    const firstLine = "84 Mersey Street";
    const city = "Warrington";
    const postalCode = "WA1 2BP";
    const title = "Address";

    expect(screen.getByTestId("footer-address")).toBeInTheDocument();
    expect(screen.getByText(title).textContent).toEqual(title);
    expect(screen.getByTestId("footer-address-content").textContent).toContain(
      firstLine
    );
    expect(screen.getByTestId("footer-address-content").textContent).toContain(
      city
    );
    expect(screen.getByTestId("footer-address-content").textContent).toContain(
      postalCode
    );
  });

  it("Should display the follow links in the footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer-follow")).toBeInTheDocument();
    expect(screen.getByTestId("footer-follow-fb")).toBeInTheDocument();
    expect(screen.getByTestId("footer-follow-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("footer-follow-twitter")).toBeInTheDocument();
  });

  it("Should include the watermark for BMC Digital", () => {
    render(<Footer />);

    expect(
      screen.getByTestId("footer-follow-content-watermark").textContent
    ).toContain("BMC Digital");
    expect(screen.getByTestId("footer-follow-github")).toBeInTheDocument();
  });

  it("Should responsively resize the footer based on the width of the screen", () => {
    render(<Footer />);

    act(() => {
      window.innerWidth = 700;
      fireEvent(window, new Event("resize"));
    });

    expect(global.innerWidth).toBe(700);
    expect(screen.getByTestId("footer").className).toContain("flex-wrap");

    act(() => {
      window.innerWidth = 1024;
      fireEvent(window, new Event("resize"));
    });

    expect(global.innerWidth).toBe(1024);
    expect(screen.getByTestId("footer").className).not.toContain("flex-wrap");
  });
});
