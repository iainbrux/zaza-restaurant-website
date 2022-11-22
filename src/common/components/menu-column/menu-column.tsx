import { MenuCard, MenuCardProperties } from "../menu-card";

export type MenuColumnProperties = {
  dataTestId: string;
  title: string;
  menuItems: MenuCardProperties[];
};

export const MenuColumn = ({
  dataTestId,
  title,
  menuItems,
}: MenuColumnProperties) => (
  <div className="flex flex-col m-4" data-testid={dataTestId}>
    <h1 className="text-center text-5xl mb-4 uppercase">{title}</h1>
    {menuItems.map(({ dataTestId: cardDataTestId, ...rest }, index) => (
      <MenuCard dataTestId={cardDataTestId} key={index.toString()} {...rest} />
    ))}
  </div>
);
