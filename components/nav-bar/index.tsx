import Image from "next/image";
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-center py-4 border-b-2 shadow-sm border-sky-500 fixed top-0 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500s bg-black z-10">
        <Image
          alt=""
          className="absolute left-8"
          height={85}
          src="/logo-ipsum.svg"
          width={175}
        />
        <div>
          <Link className="mx-4" href="/">
            HOME
          </Link>
          <Link className="mx-4" href="/menu">
            MENU
          </Link>
          <Link className="mx-4" href="/about">
            ABOUT
          </Link>
          <Link className="mx-4" href="/contact">
            CONTACT
          </Link>
          <Link
            className="py-2 px-4 bg-cyan-500 rounded-full mx-2"
            href="/contact"
          >
            RESERVATIONS
          </Link>
        </div>
      </nav>
    </header>
  );
};
