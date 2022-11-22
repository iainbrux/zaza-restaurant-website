import Link from "next/link";

export const ReserveNow = () => (
  <section
    className="flex w-full justify-center items-center"
    data-testid="reserve-now-section"
  >
    <h2 className="text-black text-3xl uppercase p-16">reserve now</h2>
    <button
      className="bg-orange-200 text-black px-8 py-4 uppercase text-sm"
      data-testid="home-page-menu-overview-button"
    >
      <Link href="/reservations">make a reservation</Link>
    </button>
  </section>
);
