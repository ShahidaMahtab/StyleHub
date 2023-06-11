"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Link from "next/link";
export default function BillingAddress() {
  const [showAddressDiv, setShowAddressDiv] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowAddressDiv(event.target.checked);
  };
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit function
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12 shadow-lg rounded-lg">
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
      <h1 className="pb-8 text-3xl text-center">Billing Details</h1>

      <div className="px-4 mx-auto max-w-screen-2xl md:px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="line1"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Address line 1*
            </label>
            <input
              type="text"
              {...register("line1", {
                required: true,
              })}
              name="line1"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="line2"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Address line 2*
            </label>
            <input
              type="text"
              {...register("line2")}
              name="line2"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Phone number*
            </label>
            <input
              type="text"
              {...register("phone", {
                required: true,
                minLength: {
                  value: 5,
                  message: "min length is 5",
                },
              })}
              name="phone"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="country"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Country/Region*
            </label>
            <select
              name="country"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
              {...register("country")}
            >
              <option value="jacket">Jacket</option>
              <option value="punjabi">Punjabi</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="sm:col-span-2 w-full">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  City *
                </label>
                <input
                  type="text"
                  {...register("city")}
                  name="city"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  State *
                </label>
                <input
                  type="text"
                  {...register("state")}
                  name="state"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="postal"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Postal/ZIP Code*
                </label>
                <input
                  type="text"
                  {...register("postal")}
                  name="input3"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                />
              </div>
            </div>
            {/* checkbox */}
            <div className="inline-flex items-center space-x-2 mt-3">
              <label className={`${showAddressDiv ? "text-blue-500" : ""}`}>
                <input
                  type="checkbox"
                  checked={showAddressDiv}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-blue-500"
                />
              </label>
              <span>Ship to a Different Address?</span>
            </div>
            {showAddressDiv && (
              <div className="mt-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="line1"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    Address line 1*
                  </label>
                  <input
                    type="text"
                    {...register("line1", {
                      required: true,
                    })}
                    name="line1"
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                  />
                </div>

                <div className="sm:col-span-2 mt-3">
                  <label
                    htmlFor="line2"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    Address line 2*
                  </label>
                  <input
                    type="text"
                    {...register("line2")}
                    name="line2"
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <label
                      htmlFor="city"
                      className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      {...register("city")}
                      name="city"
                      className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                    >
                      State *
                    </label>
                    <input
                      type="text"
                      {...register("state")}
                      name="state"
                      className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postal"
                      className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                    >
                      Postal/ZIP Code*
                    </label>
                    <input
                      type="text"
                      {...register("postal")}
                      name="input3"
                      className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
