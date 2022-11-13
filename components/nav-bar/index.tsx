import Link from "next/link";

export const NavigationBar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between py-4 px-12 border-b-2 shadow-sm border-sky-500 fixed top-0 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500s bg-black z-10">
        <img src="/logo-ipsum.svg" />
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
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};
