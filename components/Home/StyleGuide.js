"use client";
import React from "react";
import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";
export default function StyleGuide() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-200">
        <img src="path_to_image.jpg" alt="Image" className="w-full" />
        <div className="flex items-center">
          <Link href="/" className="hover:cursor-pointer">
            Style Guide
          </Link>
          <BiChevronsRight size={20} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-200">
        <img src="path_to_image.jpg" alt="Image" className="w-full" />
        <div className="flex items-center">
          <Link href="/" className="hover:cursor-pointer">
            Style Guide
          </Link>
          <BiChevronsRight size={20} />
        </div>
      </div>
    </div>
  );
}
