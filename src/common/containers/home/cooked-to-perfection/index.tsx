import Link from "next/link";

export const CookedToPerfection = () => {
  return (
    <section
      className="relative h-[40vh] bg-[url('/parallax-1.jpg')] bg-cover bg-fixed"
      data-testid="cooked-to-perfection"
    >
      <div className="flex flex-col w-full h-full items-center justify-center uppercase">
        <h1 className="text-7xl text-white">cooked to perfection</h1>
        <button
          className="bg-orange-200 text-black px-8 py-4 mt-8 uppercase text-sm"
          data-testid="home-page-menu-overview-button"
        >
          <Link href="/reservations">book a table</Link>
        </button>
      </div>
    </section>
  );
};
