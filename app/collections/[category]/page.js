"use client";
import Link from "next/link";
import React from "react";

export default function Category({ params }) {
  console.log(params.category);
  return (
    <div>
      <h1>category wise product luxury punjabi</h1>
      <Link href={"/product-details/id"}>Punjabi</Link>
    </div>
  );
}
