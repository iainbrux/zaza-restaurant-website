import Link from "next/link";
import { SmallDivider } from "../components/dividers/small-divider";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/nav-bar";

export const Home = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex flex-col">
        <section>
          <div className="relative h-screen scrollbar-hide">
            <video
              autoPlay
              className="absolute w-full h-[calc(100%-58px)] object-cover"
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
              <SmallDivider />
              <Link
                className="border-2 py-3 px-6 mt-4 text-sm tracking-widest rounded-sm hover:ease-in-out duration-300 hover:bg-white hover:text-black"
                data-testid="reservations-home-button"
                href="/reservations"
              >
                BOOK A TABLE
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div>HELLO!</div>
        </section>
      </main>
      <Footer />
    </>
  );
};
