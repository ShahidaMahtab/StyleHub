"use client";
import React, { useEffect, useState } from "react";
import Pay from "./../Payment/Payment";
import { useUser } from "@/components/Context/UserContext";

export default function CheckoutOrder() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cartItems);
      });
  }, [user?.email]);
  // calculate amount
  const calculateItemAmount = (price, quantity) => {
    return price * quantity;
  };
  // total
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += calculateItemAmount(item.price, item.quantity);
    });
    return total.toFixed(2);
  };

  return (
    <>
      <div className="rounded-lg shadow-lg">
        <h1 className="pb-8 mt-8 text-3xl text-center">Your Order</h1>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const { title, price, quantity } = item;
                const itemAmount = calculateItemAmount(price, quantity);
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {title}
                      <p className="mt-3 text-gray-500">Quantity: {quantity}</p>
                    </th>
                    <td className="px-6 py-4 text-gray-900 dark:text-white text-bold">
                      ${itemAmount}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 dark:text-white"
                >
                  Total
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  ${calculateTotalAmount()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pay />
    </>
  );
}
