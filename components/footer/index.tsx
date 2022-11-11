import { FooterContent } from "./content";
import { FooterSplitter } from "./content-splitter";

export const Footer = () => {
  const loremIpsum = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odio
  corporis exercitationem fugiat ex recusandae veniam voluptate dolor,
  nisi saepe modi similique necessitatibus omnis atque architecto! Ipsam
  aspernatur assumenda optio.`;

  return (
    <footer className="flex flex-row py-4 px-12 fixed bottom-0 bg-slate-900">
      <FooterContent title="Find" content={loremIpsum} />
      <FooterSplitter />
      <FooterContent title="Follow" content={loremIpsum} />
      <FooterSplitter />
      <FooterContent title="Contact" content={loremIpsum} />
    </footer>
  );
};
