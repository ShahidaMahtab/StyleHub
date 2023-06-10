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
  const onSubmit = async (data) => {};
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
      <h1 className="pb-8 text-5xl text-center">Sign Up</h1>
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
          <div>
            <label
              htmlFor="firstName"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              First name*
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: true,
                minLength: 2,
              })}
              name="firstName"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none outline-blue-700 bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Last name
            </label>
            <input
              type="text"
              {...register("lastName")}
              name="lastName"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              name="email"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Password*
            </label>
            <input
              type="text"
              {...register("password", {
                required: true,
                minLength: {
                  value: 5,
                  message: "min length is 5",
                },
              })}
              name="password"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="cpassword"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Confirm Password*
            </label>
            <input
              type="text"
              {...register("cpassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              name="cpassword"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
