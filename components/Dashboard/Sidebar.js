import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div>
      <ul>
        <Link href="/dashboard/orders"> Orders</Link>
        <Link href="">Wishlist</Link>
        <Link href=""> Billing Address</Link>
        <Link href="">Shipping Address</Link>
        <Link href="">Account info</Link>
        <Link href="">Change Password</Link>
        <Link href="">Logout</Link>
      </ul>
    </div>
  );
}
