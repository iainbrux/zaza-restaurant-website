import Link from "next/link";
import { SmallDivider } from "../../../components/dividers/small-divider";
import { Image } from "../../../components/image";
import { MenuCardProperties } from "../../../components/menu-card";
import { MenuColumn } from "../../../components/menu-column/menu-column";

const chefsItems: MenuCardProperties[] = [
  {
    dataTestId: "lamb-shish-kebab",
    description: "Marinated lamb cubes, skewered and cooked on lump wood fire.",
    item: "lamb shish kebab",
    price: "17.95",
  },
  {
    dataTestId: "beyti-kebab",
    description:
      "Chargrilled lean tender minced lamb, wrapped in home made thin bread,sliced into small pieces served with tomato sauce yoghurt, butter.",
    item: "beyti kebab",
    price: "18.95",
  },
  {
    dataTestId: "chicken-pinchos",
    description:
      "Marinated small chicken cubes skewered on bamboo sticks cooked on chargrill.",
    item: "chicken pinchos",
    price: "6.95",
  },
  {
    dataTestId: "lamb-chops",
    description:
      "4 Lamb chops Marinated with spice & herbs cooked on lump wood fire.",
    item: "lamb chops",
    price: "18.95",
  },
  {
    dataTestId: "mezze-kofte",
    description:
      "Minced lamb & beef special blended with herbs and spice cooked on charcoal grill.",
    item: "mezze kofte",
    price: "14.95",
  },
];

const vegetarianItems: MenuCardProperties[] = [
  {
    dataTestId: "veggie-moussaka",
    item: "veggie moussaka",
    price: "14.95",
    vegetarian: true,
  },
  {
    dataTestId: "vegetarian-sizzler",
    item: "vegetarian sizzler",
    price: "13.95",
    vegetarian: true,
  },
  {
    dataTestId: "avocado-and-falafel-salad",
    item: "avocado and falafel salad",
    price: "11.95",
    vegetarian: true,
  },
  {
    dataTestId: "garlic-mushrooms",
    item: "garlic mushrooms",
    price: "8.95",
    vegetarian: true,
  },
  {
    dataTestId: "patatas-bravas",
    item: "patatas bravas",
    price: "5.95",
    vegetarian: true,
  },
  {
    dataTestId: "halloumi-fries",
    item: "halloumi fries",
    price: "8.95",
    vegetarian: true,
  },
  {
    dataTestId: "veggie-mixed-grill",
    item: "veggie mixed grill",
    price: "18.95",
    vegetarian: true,
  },
];
const wines: MenuCardProperties[] = [
  {
    dataTestId: "central-monte-sauvignon-blanc",
    description: "Chile",
    item: "central monte sauvignon blanc",
    price: "16.95",
  },
  {
    dataTestId: "down-under-chardonnay",
    description: "Australia (SW)",
    item: "down under chardonnay",
    price: "19.95",
  },
  {
    dataTestId: "central-monte-merlot",
    description: "Chile",
    item: "central monte merlot",
    price: "16.95",
  },
  {
    dataTestId: "illusion-malbec-bonarda",
    description: "Argentina",
    item: "central monte sauvignon blanc",
    price: "17.95",
  },
  {
    dataTestId: "bello-tramonto-pinot-grigio-rose",
    description: "Italy",
    item: "bellow tramonto pinot grigio rose",
    price: "21.95",
  },
  {
    dataTestId: "vina-cerrada-blanco",
    description: "Spain",
    item: "vina cerrada blanco",
    price: "28.95",
  },
];

export const MenuOverview = () => (
  <section
    className="p-16 flex flex-col items-center justify-center w-full h-full"
    data-testid="home-page-menu-overview"
  >
    <Image
      alt="logo ipsum 2"
      dataTestId="logo-ipsum-2"
      source="/logo-ipsum-2.svg"
      width={150}
    />
    <h2
      className="text-black mt-4 text-center text-2xl"
      data-testid="home-page-menu-overview-welcome"
    >
      Welcome to Zaza&apos;s and let Zaza&apos;s welcome you back with <br />
      it&apos;s pleasant atmosphere, delightful foods & drinks.
    </h2>
    <SmallDivider color="black" dataTestId="home-page-menu-divider" />
    <div className="flex flex-row justify-center text-black">
      <MenuColumn
        dataTestId="chefs-column"
        menuItems={chefsItems}
        title="chef's"
      />
      <MenuColumn
        dataTestId="vegetarian-column"
        menuItems={vegetarianItems}
        title="vegetarian"
      />
      <MenuColumn dataTestId="wine-column" menuItems={wines} title="wine" />
    </div>
    <button
      className="bg-orange-200 text-black px-8 py-4 uppercase text-sm"
      data-testid="home-page-menu-overview-button"
    >
      <Link href="/menu">see main menu</Link>
    </button>
  </section>
);
