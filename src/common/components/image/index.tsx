export type ImageProperties = {
  alt: string;
  customCss?: string;
  dataTestId: string;
  hasBorder?: boolean;
  height?: number;
  source: string;
  width?: number;
};

export const Image = ({
  alt,
  customCss,
  dataTestId,
  hasBorder = false,
  height,
  source,
  width,
}: ImageProperties) => (
  <picture
    className={hasBorder ? "border-x border-y-2" : ""}
    data-testid={dataTestId}
  >
    <source
      data-testid={dataTestId + "-source"}
      srcSet={source}
      type="image/webp"
    ></source>
    <img
      alt={alt}
      className={customCss ?? "object-cover w-full h-full"}
      data-testid={dataTestId + "-image"}
      height={height}
      width={width}
    />
  </picture>
);
