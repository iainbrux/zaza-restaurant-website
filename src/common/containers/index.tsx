import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/nav-bar";

export const Home = () => {
  return (
    <>
      <NavigationBar />
      <video
        autoPlay
        className="absolute w-full h-screen object-cover"
        data-testid="home-page-video"
        loop
        muted
      >
        <source src="/home-page-video.mp4" type="video/mp4" />
      </video>
      <main>
        <section className="absolute h-screen w-full font-display flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-7xl">ZAZA&apos;S MEDITERRANEAN GRILL</h1>
          <p className="text-lg tracking-widest">
            84 MERSEY STREET, WARRINGTON, WA1 2BP
            <br />
            TEL : 01925 657 287
          </p>
          <div className="flex flex-row w-full justify-center items-center my-4">
            <div className="relative border-b-2 h-px w-24"></div>
            <FontAwesomeIcon className="mx-2" icon={faStar} size="lg" />
            <div className="relative border-b-2 h-px w-24"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
