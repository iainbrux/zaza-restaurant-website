import { useRef } from "react";
import { Footer } from "../../components/footer";
import { NavigationBar } from "../../components/nav-bar";
import { AboutUsOverview } from "./about-us";
import { CallUs } from "./call-us";
import { CookedToPerfection } from "./cooked-to-perfection";
import { Gallery } from "./gallery";
import { Landing } from "./landing";
import { MenuOverview } from "./menu-overview";
import { ReserveNow } from "./reserve-now";
import { ThreeImages } from "./three-images";

export const Home = () => {
  const imagesReference = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <NavigationBar />
      <main className="flex flex-col">
        <Landing reference={imagesReference} />
        <ThreeImages reference={imagesReference} />
        <MenuOverview />
        <CookedToPerfection />
        <Gallery />
        <AboutUsOverview />
        <CallUs />
        <ReserveNow />
      </main>
      <Footer />
    </>
  );
};
