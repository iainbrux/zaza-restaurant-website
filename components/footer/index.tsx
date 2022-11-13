import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContent } from "./content";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

type WindowSizing = {
  innerWidth: number;
  innerHeight: number;
};

export const Footer = () => {
  const [windowSizing, setWindowSizing] = useState<WindowSizing>();

  const handleResize = () =>
    setWindowSizing({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addressContent = (
    <p className="text-center">
      84 Mersey Street
      <br />
      Warrington
      <br />
      WA1 2BP
    </p>
  );

  const followContent = (
    <div className="text-center">
      <ul>
        <li className="inline m-2">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </li>
        <li className="inline m-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </li>
        <li className="inline m-2">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </li>
      </ul>
      <p className="mt-4">
        &copy; 2022 B&amp;C Digital
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </p>
    </div>
  );

  const contactContent = (
    <p className="text-center">
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
    <footer className={footerClassName}>
      <FooterContent title="Address" content={addressContent} />
      <FooterContent title="Follow" content={followContent} />
      <FooterContent title="Contact" content={contactContent} />
    </footer>
  );
};
