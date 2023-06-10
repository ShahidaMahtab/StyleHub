import Link from "next/link";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";
export default function Sidebar() {
  return (
    <div className="shadow-lg rounded-lg">
      <ul className="space-y-4 p-4">
        <div className="flex items-center">
          <BiChevronsRight size={20} />
          <Link
            href="/dashboard/orders"
            className="block px-4 bg-white rounded-md"
          >
            Orders
          </Link>
        </div>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Billing Address
          </Link>
        </li>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Shipping Address
          </Link>
        </li>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Account info
          </Link>
        </li>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Change Password
          </Link>
        </li>
        <li>
          <Link href="" className="block px-4 py-2 bg-white rounded-md">
            Logout
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/uploadproducts"
            className="block px-4 py-2 bg-white rounded-md"
          >
            Upload Product
          </Link>
        </li>
      </ul>
    </div>
  );
}
