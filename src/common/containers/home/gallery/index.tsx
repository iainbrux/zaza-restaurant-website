import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
  return (
    <section
      className="h-full w-full flex flex-col items-center"
      data-testid="home-page-gallery"
    >
      <h1 className="text-black text-7xl uppercase mt-8">gallery</h1>
      <div className="text-black flex flex-row w-2/3 flex-wrap justify-center mt-8">
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
        <Image
          alt=""
          className="p-2"
          height={75}
          src="/small-placeholder.jpg"
          width={300}
        />
      </div>
      <button
        className="bg-orange-200 text-black px-8 py-4 my-8 uppercase text-sm"
        data-testid="home-page-gallery-button"
      >
        <Link href="/about">see our gallery</Link>
      </button>
    </section>
  );
};
