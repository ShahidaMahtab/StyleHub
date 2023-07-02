"use client";
import React from "react";
import { Collapse } from "antd";
import Link from "next/link";
import Fade from "react-reveal/Fade";
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

const LeatherProducts = [
  {
    name: "Victorine Wallet",
    pathname: "/collections/leatherGoods/wallets-for-women",
  },
  {
    name: "Wallet",
    pathname: "/collections/leatherGoods/wallets-for-women",
  },
];
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

const NavigationContent = ({ toggleDrawer }) => {
  const items = [
    {
      key: "1",
      label: <h1 className="text-xl font-semibold">Men</h1>,
      children: (
        <div>
          <Fade top>
            {manProducts?.map((man) => (
              <Link onClick={toggleDrawer} href={man?.pathname} key={man?.name}>
                <h2 className="pl-2 text-lg">{man.name}</h2>
              </Link>
            ))}
          </Fade>
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 className="text-xl font-semibold">Women</h1>,
      children: (
        <div>
          <Fade top>
            {womenProducts?.map((women) => (
              <Link
                onClick={toggleDrawer}
                href={women?.pathname}
                key={women?.name}
              >
                <h2 className="pl-2 text-lg">{women.name}</h2>
              </Link>
            ))}
          </Fade>
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
          <Fade top>
            {LeatherProducts.map((leather) => (
              <Link
                onClick={toggleDrawer}
                href={leather?.pathname}
                key={leather?.name}
              >
                <h2 className="pl-2 text-lg">{leather.name}</h2>
              </Link>
            ))}
          </Fade>
        </div>
      ),
    },
    {
      key: "4",
      label: <h1 className="text-xl font-semibold">Jewelry</h1>,
      children: (
        <div>
          <Fade top>
            {jewelryProducts.map((jewelry) => (
              <Link
                onClick={toggleDrawer}
                href={jewelry?.pathname}
                key={jewelry?.name}
              >
                <h2 className="pl-2 text-lg">{jewelry.name}</h2>
              </Link>
            ))}
          </Fade>
        </div>
      ),
    },
  ];
  return (
    <div
      className="w-full lg:w-full "
      style={{ maxHeight: "70vh", overflowY: "auto" }}
    >
      {/* <Fade top> */}
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        accordion
        expandIconPosition="end"
      />
      {/* </Fade> */}
    </div>
  );
};

export default NavigationContent;
