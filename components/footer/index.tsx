import { FooterContent } from "./content";

export const Footer = () => {
  const loremIpsum = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odio
  corporis exercitationem fugiat ex recusandae veniam voluptate dolor,
  nisi saepe modi similique necessitatibus omnis atque architecto! Ipsam
  aspernatur assumenda optio.`;

  return (
    <footer className="flex flex-row">
      <FooterContent title="Address" content={loremIpsum} />
      <FooterContent title="Address" content={loremIpsum} />
      <FooterContent title="Address" content={loremIpsum} />
    </footer>
  );
};
