import { FooterContent } from "./content";

export const Footer = () => {
  const loremIpsum = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odio
  corporis exercitationem fugiat ex recusandae veniam voluptate dolor,
  nisi saepe modi similique necessitatibus omnis atque architecto! Ipsam
  aspernatur assumenda optio.`;

  const titles = ["Find", "Follow", "Contact"];

  return (
    <footer className="flex flex-row py-4 px-12 z-0">
      {titles.map((title) => (
        <FooterContent title={title} content={loremIpsum} />
      ))}
    </footer>
  );
};
