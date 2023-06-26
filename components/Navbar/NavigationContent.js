import React from "react";
import { Collapse } from "antd";
import Link from "next/link";
const manProducts = [
  { name: "All Ready-to-Wear", pathname: "/collections/men/ready-to-wear" },
  {
    name: "T-shirts and Polos",
    pathname: "/collections/men/t-shirts",
  },
  {
    name: "Shirts",
    pathname: "/collections/men/shirts",
  },
  {
    name: "Knitwear and Sweatshirts",
    pathname: "/collections/men/knitwear",
  },
  {
    name: "Blazers and Jackets",
    pathname: "/collections/men/jacket",
  },
  {
    name: "Outerwear and Coats",
    pathname: "/collections/men/outerwear",
  },

  {
    name: "Pants",
    pathname: "/collections/men/pants",
  },
  {
    name: "Swimwear",
    pathname: "/collections/men/swimwear",
  },
];
const womenProducts = [
  { name: "Puffer Jackets", pathname: "/collections/women/puffer-jackets" },
  { name: "Tops", pathname: "/collections/women/tops" },
  { name: "Dresses", pathname: "/collections/women/dresses" },
  { name: "Skirts and Shorts", pathname: "/collections/women/skirt" },
  { name: "Pants", pathname: "/collections/women/pants" },
  { name: "Knitwear", pathname: "/collections/women/knitwear" },
  { name: "Coats and Jackets", pathname: "/collections/women/coat" },
  { name: "Swimwear", pathname: "/collections/women/swimwear" },
];
const LeatherProducts = ["Coming soon"];
const jewelryProducts = [
  {
    name: "All Fashion Jewellery",
    pathname: "/collections/jewelry/all-fashion-jewellery",
  },
  { name: "Earrings", pathname: "/collections/jewelry/earrings" },
  {
    name: "Necklaces and Pendants",
    pathname: "/collections/jewelry/necklaces",
  },
  { name: "Bracelets", pathname: "/collections/jewelry/bracelet" },
  { name: "Rings", pathname: "/collections/jewelry/rings" },
  { name: "Brooches and Others", pathname: "/collections/jewelry/rings" },
];
const items = [
  {
    key: "1",
    label: <h1 className="text-xl font-semibold">Men</h1>,
    children: (
      <div>
        {manProducts?.map((man) => (
          <Link href={man?.pathname}>
            <h2 className="text-lg pl-2" key={man?.name}>
              {man}
            </h2>
          </Link>
        ))}
      </div>
    ),
  },
  {
    key: "2",
    label: <h1 className="text-xl font-semibold">Women</h1>,
    children: (
      <div>
        {womenProducts?.map((women) => (
          <Link href={women?.pathname}>
            <h2 className="text-lg pl-2" key={women?.name}>
              {women}
            </h2>
          </Link>
        ))}
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <h1 className="text-xl font-semibold">
        All Wallets & Small Leather Goods
      </h1>
    ),
    children: (
      <div>
        {LeatherProducts?.map((leather) => (
          <h2 className="text-lg pl-2" key={leather}>
            {leather}
          </h2>
        ))}
      </div>
    ),
  },
  {
    key: "4",
    label: <h1 className="text-xl font-semibold">Jewelry</h1>,
    children: (
      <div>
        {jewelryProducts.map((jewelry) => (
          <Link href={jewelry?.pathname}>
            <h2 className="text-lg pl-2" key={jewelry?.name}>
              {jewelry}
            </h2>
          </Link>
        ))}
      </div>
    ),
  },
];

const NavigationContent = () => {
  return (
    <div
      className="w-full lg:w-full "
      style={{ maxHeight: "70vh", overflowY: "auto" }}
    >
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        accordion
        expandIconPosition="end"
      />
    </div>
  );
};

export default NavigationContent;
