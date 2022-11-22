import Link from "next/link";
import { SmallDivider } from "../../../components/dividers/small-divider";

export const AboutUsOverview = () => (
  <section
    className="w-full flex flex-col items-center justify-center"
    data-testid="about-us-overview"
  >
    <p
      className="text-black text-center"
      data-testid="about-us-overview-welcome"
    >
      Welcome to Zaza&apos;s and let Zaza&apos;s welcome you back with
      <br />
      it&apos;s pleasant atmosphere, delightful foods & drinks.
    </p>
    <SmallDivider color="black" dataTestId="about-us-overview-divider" />
    <div className="flex flex-row justify-around items-center w-2/3">
      <div className="text-black w-1/4 text-center">
        <h2 className="uppercase text-3xl my-4">about us</h2>
        <p className="font-description text-slate-500 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non,
          delectus laborum beatae similique totam eius odio, magnam nihil
          perferendis sapiente quaerat ipsam at provident. Molestias obcaecati
          distinctio laboriosam voluptate!
        </p>
        <button
          className="bg-orange-200 text-black px-8 py-4 mb-4 uppercase text-sm"
          data-testid="about-us-overview-button"
        >
          <Link href="/about">read more</Link>
        </button>
      </div>
      <div className="text-black w-1/4 text-center" data-testid="">
        <h2 className="uppercase text-3xl my-4">opening times</h2>
        <p
          className="my-4 bg-orange-200 p-4 uppercase"
          data-testid="about-us-overview-opening-times-monday"
        >
          monday: 14:30 - 22:30
        </p>
        <p
          className="my-4 bg-orange-200 p-4 uppercase"
          data-testid="about-us-overview-opening-times-tuesday-saturday"
        >
          tuesday - saturday: 14:30 - 22:30
        </p>
        <p
          className="my-4 bg-orange-200 p-4 uppercase"
          data-testid="about-us-overview-opening-times-sunday"
        >
          sunday: 14:30 - 22:30
        </p>
      </div>
    </div>
  </section>
);
