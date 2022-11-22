import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MutableRefObject } from "react";
import { SmallDivider } from "../../components/dividers/small-divider";

export type LandingProperties = {
  reference: MutableRefObject<HTMLDivElement | null>;
};

export const Landing = ({ reference }: LandingProperties) => {
  const handleClick = () => {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section data-testid="landing-section">
      <div className="relative h-[calc(100vh-58px)]">
        <video
          autoPlay
          className="absolute w-full h-full object-cover"
          data-testid="home-page-video"
          loop
          muted
        >
          <source src="/home-page-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute h-[calc(100vh-58px)] w-full font-display flex flex-col justify-center items-center text-center text-white uppercase">
          <h1 className="text-7xl">zaza&apos;s mediterranean grill</h1>
          <p className="text-lg tracking-widest">
            84 mersey street, warrington, wa1 2bp
            <br />
            tel : 01925 657 287
          </p>
          <SmallDivider dataTestId="home-page-video-divider" />
          <Link
            className="border-2 py-3 px-6 mt-4 text-sm tracking-widest rounded-sm hover:ease-in-out duration-300 hover:bg-white hover:text-black"
            data-testid="reservations-home-button"
            href="/reservations"
          >
            book a table
          </Link>
          <button
            className="p-4 m-2"
            data-testid="scroll-down-button"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faCircleChevronDown} size="xl" />
          </button>
        </div>
      </div>
    </section>
  );
};
