"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronsRight } from "react-icons/fi";

import "./CategoryProduct.css";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoryProduct = async () => {
  const data = await getData();
  const products = data.products;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          {products.map((product) => (
            <Link href={`/collections/${product.category}`} key={product._id}>
              <div className="space-y-4 pr-[1.5px]">
                <div className="">
                  <Image
                    src={product.image}
                    alt="product-image"
                    className="w-full "
                    width={240}
                    height={327}
                  />
                </div>
                <div className="flex items-center justify-center w-2/3 py-2 mx-auto space-x-4 text-center capitalize border shadow-md rounded-xl border-slate-300 ">
                  <button className="text-lg capitalize ">
                    {product.category}
                  </button>
                  <FiChevronsRight size={26} />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoryProduct;
