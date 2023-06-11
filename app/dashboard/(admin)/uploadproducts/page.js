"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    reset();
    toast.success("Your account has been created", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="pb-8 text-5xl text-center">Upload Product</h1>
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Product Title
            </label>
            <input
              {...register("title")}
              type="text"
              name="title"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Image link
            </label>
            <input
              {...register("image")}
              type="text"
              name="image"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Price
            </label>
            <input
              type="text"
              {...register("price", {
                required: true,
                minLength: 2,
              })}
              name="price"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Quantity
            </label>
            <input
              type="text"
              {...register("quantity")}
              name="quantity"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 md:w-1/3">
              <div>
                <label
                  htmlFor="color"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Color
                </label>
                <select
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                  {...register("color")}
                >
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>

            <div className="w-full px-2 md:w-1/3">
              <div>
                <label
                  htmlFor="size"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Size
                </label>
                <select
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                  {...register("size")}
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>

            <div className="w-full px-2 md:w-1/3">
              <div>
                <label
                  htmlFor="category"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Category
                </label>
                <select
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                  {...register("category")}
                >
                  <option value="jacket">Jacket</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
