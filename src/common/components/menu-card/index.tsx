export type MenuCardProperties = {
  dataTestId: string;
  item: string;
  price: string;
};

export const MenuCard = ({ dataTestId, item, price }: MenuCardProperties) => {
  return (
    <div
      className="flex flex-row items-center justify-between w-64 whitespace-nowrap"
      data-testid={dataTestId}
    >
      <h2 className="capitalize text-xl">{item}</h2>
      <span className="border-b-2 border-dotted border-slate-400 w-full mx-4"></span>
      <h3 className="w-auto text-slate-600">
        £{Number.parseFloat(price).toFixed(2)}
      </h3>
    </div>
  );
};
