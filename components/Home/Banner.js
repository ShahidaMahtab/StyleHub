import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="">
          <Image
            src="https://source.unsplash.com/7cERndkOyDw/1690x750"
            alt="Banner Image"
            width={1690}
            height={100}
            className="center bg-no-repeat brightness-[40%] cover"
          />
        </div>
        <div className="container absolute inset-0 flex justify-start p-4 mx-auto top-28">
          <div className="space-y-4">
            <div className="text-4xl font-semibold text-white uppercase">
              Fosfo puffer
            </div>
            <br />
            <div className="font-bold text-white text-8xl">Eco-Friendly &</div>
            <br />
            <div className="text-4xl font-semibold text-white ">on trend.</div>
            {/* button */}
            <div className="flex pt-4 space-x-4 font-semibold text-black">
              <button className="px-3 py-2 bg-white rounded-xl">
                Shop Men
              </button>
              <button className="px-3 py-2 bg-white rounded-xl">
                Shop Women
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
