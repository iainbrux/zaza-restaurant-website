export type MenuCardProperties = {
  dataTestId: string;
  description?: string;
  item: string;
  price: string;
  vegetarian?: boolean;
};

export const MenuCard = ({
  dataTestId,
  description,
  item,
  price,
  vegetarian = false,
}: MenuCardProperties) => {
  return (
    <div className="w-96 mb-8" data-testid={dataTestId + "-wrapper"}>
      <div
        className={`flex flex-row items-center justify-between whitespace-nowrap uppercase ${
          vegetarian && "bg-orange-200 p-2"
        }`}
        data-testid={dataTestId}
      >
        <h2 className="text-xl">{item}</h2>
        <span className="border-b-2 border-dotted border-slate-400 w-full mx-4"></span>
        <h3 className="w-auto text-slate-600">
          £{Number.parseFloat(price).toFixed(2)}
        </h3>
      </div>
      {description && (
        <p
          className="font-description text-sm text-slate-500 mt-2"
          data-testid={`menu-card-${item}-description`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
