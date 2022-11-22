import Link from "next/link";

export const NavigationBar = () => {
  return (
    <header>
      <nav
        className="flex flex-row items-center justify-center py-4 border-b-2 shadow-sm border-sky-500 sticky top-0 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500s bg-black z-10"
        data-testid="navbar"
      >
        <picture className="absolute left-8">
          <source srcSet="/logo-ipsum.svg" type="image/webp"></source>
          <img alt="logo ipsum" data-testid="nav-logo" />
        </picture>
        <div>
          <Link className="mx-4" data-testid="nav-home" href="/">
            HOME
          </Link>
          <Link className="mx-4" data-testid="nav-menu" href="/menu">
            MENU
          </Link>
          <Link className="mx-4" data-testid="nav-menu" href="/about">
            ABOUT
          </Link>
          <Link className="mx-4" data-testid="nav-contact" href="/contact">
            CONTACT
          </Link>
          <Link
            className="py-2 px-4 bg-cyan-500 rounded-full mx-2"
            data-testid="nav-reservations"
            href="/reservations"
          >
            RESERVATIONS
          </Link>
        </div>
      </nav>
    </header>
  );
};
