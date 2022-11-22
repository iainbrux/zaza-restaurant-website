import { MutableRefObject } from "react";
import { Image, ImageProperties } from "../../components/image";

export type ThreeImagesProperties = {
  reference: MutableRefObject<HTMLDivElement | null>;
};

export const ThreeImages = ({ reference }: ThreeImagesProperties) => {
  const images: ImageProperties[] = [
    {
      alt: "",
      dataTestId: "home-page-three-images-image-one",
      source: "/small-placeholder.jpg",
    },
    {
      alt: "",
      dataTestId: "home-page-three-images-image-two",
      source: "/small-placeholder-2.jpg",
    },
    {
      alt: "",
      dataTestId: "home-page-three-images-image-three",
      source: "/small-placeholder-3.jpg",
    },
  ];

  return (
    <section
      className="flex flex-row w-full"
      data-testid="home-page-three-images"
      ref={reference}
    >
      {images.map(({ alt, dataTestId, source }) => (
        <Image
          alt={alt}
          dataTestId={dataTestId}
          hasBorder
          key={source}
          source={source}
        />
      ))}
    </section>
  );
};
