import StyleGuide from "@/components/StyleGuide/StyleGuide";
import React from "react";
async function getData(params) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/${params}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const page = async ({ params }) => {
  const data = await getData(params.styleguide);

  return (
    <div className="container px-10 mx-auto mt-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
        {data?.product.map((product) => (
          <StyleGuide key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default page;
