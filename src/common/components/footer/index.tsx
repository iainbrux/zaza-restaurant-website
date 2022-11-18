import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FooterContent } from "./content";

type WindowSizing = {
  innerWidth: number;
  innerHeight: number;
};

export const Footer = () => {
  const [windowSizing, setWindowSizing] = useState<WindowSizing>();

  const handleResize = () =>
    setWindowSizing({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addressContent = (
    <p className="text-center" data-testid="footer-address-content">
      84 Mersey Street
      <br />
      Warrington
      <br />
      WA1 2BP
    </p>
  );

  // TODO: Add hrefs for social media links (unknown yet)
  const followContent = (
    <div className="text-center" data-testid="footer-follow-content">
      <ul>
        <li className="inline m-2">
          <FontAwesomeIcon
            data-testid="footer-follow-fb"
            icon={faFacebookF}
            size="lg"
          />
        </li>
        <li className="inline m-2">
          <FontAwesomeIcon
            data-testid="footer-follow-instagram"
            icon={faInstagram}
            size="lg"
          />
        </li>
        <li className="inline m-2">
          <FontAwesomeIcon
            data-testid="footer-follow-twitter"
            icon={faTwitter}
            size="lg"
          />
        </li>
      </ul>
      <p className="mt-4" data-testid="footer-follow-content-watermark">
        &copy; 2022 BMC Digital
        <FontAwesomeIcon
          className="ml-2"
          data-testid="footer-follow-github"
          icon={faGithub}
        />
      </p>
    </div>
  );

  const contactContent = (
    <p className="text-center" data-testid="footer-contact-content">
      booking@istanbulgrillwarrington.co.uk
      <br />
      01925 657 287
    </p>
  );

  const isDesktopView =
    (typeof window !== "undefined" && window.innerWidth >= 768) ||
    (windowSizing && windowSizing.innerWidth >= 768);

  const sharedStyling =
    "flex justify-center bg-slate-900 w-screen divide-dashed divide-slate-800 min-w-def";

  // Remove fixed bottom-0 when we've got content for the pages

  const footerClassName =
    typeof window === "undefined" || isDesktopView
      ? `${sharedStyling} fixed bottom-0 divide-x-2`
      : `${sharedStyling} fixed bottom-0 flex-wrap divide-y-2`;

  return (
    <footer className={footerClassName} data-testid="footer">
      <FooterContent
        content={addressContent}
        dataTestId="footer-address"
        title="Address"
      />
      <FooterContent
        content={followContent}
        dataTestId="footer-follow"
        title="Follow"
      />
      <FooterContent
        content={contactContent}
        dataTestId="footer-contact"
        title="Contact"
      />
    </footer>
  );
};
