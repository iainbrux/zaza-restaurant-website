import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef } from "react";
import { SmallDivider } from "../components/dividers/small-divider";
import { Footer } from "../components/footer";
import { MenuCard } from "../components/menu-card";
import { NavigationBar } from "../components/nav-bar";

export const Home = () => {
  const reference = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavigationBar />
      <main className="flex flex-col">
        <section>
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
            <div className="absolute h-[calc(100%-58px)] w-full font-display flex flex-col justify-center items-center text-center text-white">
              <h1 className="text-7xl">ZAZA&apos;S MEDITERRANEAN GRILL</h1>
              <p className="text-lg tracking-widest">
                84 MERSEY STREET, WARRINGTON, WA1 2BP
                <br />
                TEL : 01925 657 287
              </p>
              <SmallDivider dataTestId="home-page-video-divider" />
              <Link
                className="border-2 py-3 px-6 mt-4 text-sm tracking-widest rounded-sm hover:ease-in-out duration-300 hover:bg-white hover:text-black"
                data-testid="reservations-home-button"
                href="/reservations"
              >
                BOOK A TABLE
              </Link>
              <button className="p-4 m-2" onClick={handleClick}>
                <FontAwesomeIcon icon={faCircleChevronDown} size="xl" />
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-row w-full" ref={reference}>
          <picture className="border-x border-y-2">
            <source srcSet="/small-placeholder.jpg" type="image/webp"></source>
            <img alt="" className="object-cover w-full h-full" />
          </picture>
          <picture className="border border-y-2">
            <source
              srcSet="/small-placeholder-2.jpg"
              type="image/webp"
            ></source>
            <img alt="" className="object-cover w-full h-full" />
          </picture>
          <picture className="border border-y-2">
            <source
              srcSet="/small-placeholder-3.jpg"
              type="image/webp"
            ></source>
            <img alt="" className="object-cover w-full h-full" />
          </picture>
        </section>
        <section className="p-16 flex flex-col items-center justify-center w-full h-full">
          <picture>
            <source srcSet="/logo-ipsum-2.svg" type="image/webp"></source>
            <img alt="logo ipsum 2" width={100} />
          </picture>
          <h2 className="text-black mt-4 text-center text-2xl">
            Welcome to Zaza&apos;s and let Zaza&apos;s welcome you back with{" "}
            <br />
            it&apos;s pleasant atmosphere, delightful foods & drinks.
          </h2>
          <SmallDivider color="black" dataTestId="home-page-menu-divider" />
          <div className="flex flex-row items-center justify-center text-black">
            <div className="flex flex-col m-4">
              <h1 className="text-center text-5xl mb-4">ONE</h1>
              <MenuCard dataTestId="item-one" item="Item One" price="12.95" />
              <MenuCard dataTestId="item-two" item="Item Two" price="14.95" />
              <MenuCard
                dataTestId="item-three"
                item="Item Three"
                price="16.95"
              />
              <MenuCard dataTestId="item-four" item="Item Four" price="18.95" />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="text-center text-5xl mb-4">TWO</h1>
              <MenuCard dataTestId="item-one" item="Item One" price="12.95" />
              <MenuCard dataTestId="item-two" item="Item Two" price="14.95" />
              <MenuCard
                dataTestId="item-three"
                item="Item Three"
                price="16.95"
              />
              <MenuCard dataTestId="item-four" item="Item Four" price="18.95" />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="text-center text-5xl mb-4">THREE</h1>
              <MenuCard dataTestId="item-one" item="Item One" price="12.95" />
              <MenuCard dataTestId="item-two" item="Item Two" price="14.95" />
              <MenuCard
                dataTestId="item-three"
                item="Item Three"
                price="16.95"
              />
              <MenuCard dataTestId="item-four" item="Item Four" price="18.95" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
