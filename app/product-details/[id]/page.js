import AccordionDetails from "@/components/(ProductDetails)/Accordion/Accordion ";
import ImagePreview from "@/components/(ProductDetails)/ImagePreview/ImagePreview";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";

async function getData(params) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products/${params}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  const { title, price, image, color, category, size, quantity } =
    data.product || {};
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="px-4 mx-auto md:px-8">
        <div className="grid gap-20 md:grid-cols-2">
          <div className="space-y-4">
            <div
              className="relative overflow-hidden bg-gray-100 rounded-lg"
              // style={{ height: "700px" }}
            >
              <Image
                width={100}
                height={100}
                src={image || title}
                loading="lazy"
                alt="Photo by fastsell"
                className="object-cover object-center w-full h-full"
              />
            </div>
            {/* <div className="grid grid-cols-2 gap-4"> */}
            <ImagePreview />
            {/* </div> */}
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {title}
              </h2>
            </div>
            <div className="mb-4 md:mb-6">
              <span className="inline-block mb-3 text-sm font-semibold text-gray-500 md:text-base">
                Color
              </span>

              <div className="flex flex-wrap gap-3">
                {color?.map((c) => (
                  <button
                    className="w-8 h-8 transition duration-100 border rounded-full"
                    style={{
                      backgroundColor: c,
                      outline: `2px solid ${c}`,
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <span className="inline-block mb-3 text-sm font-semibold text-gray-500 md:text-base">
                Size
              </span>

              <div className="flex flex-wrap gap-3">
                {size?.map((s) => (
                  <button
                    type="button"
                    className="uppercase flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border rounded-md hover:bg-gray-100 active:bg-gray-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${price}
                </span>
              </div>
            </div>

            <div className="flex gap-2.5">
              {/* quantity */}
              <div className="items-center flex-1  px-8 py-3 text-sm font-semibold text-center border-2 border-indigo-300 rounded-full outline-none ring-indigo-300 focus-visible:ring flex justify-center space-x-4 sm:flex-none md:text-base sm:text-center md:justify-center">
                <button>-</button>
                <input
                  type="text"
                  name="qty"
                  value={quantity}
                  className="w-12 text-center outline-none"
                />
                <button>+</button>
              </div>

              <button className="items-center flex-1 inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-full outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base sm:text-center md:justify-center">
                Add to cart
              </button>

              <Link
                href="#"
                className="inline-flex items-center justify-center p-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-full outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                <span className="rounded-full">
                  <BiHeart size={30} />
                </span>
              </Link>
            </div>
            {/* description */}
            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="mb-3 text-lg font-semibold text-gray-800">
                Description
              </div>

              <p className="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>
            <div className="mt-10 md:mt-16 lg:mt-20">
              <AccordionDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
