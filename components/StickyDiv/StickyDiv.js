"use client";
import Link from "next/link";

import React from "react";
import { useState } from "react";
import style from "./StickyDiv.css";

import { BiAlignMiddle, BiChevronUp, BiMessage } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const StickyDiv = () => {
  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <div className="sticky bottom-0 side_top">
      <div className="sidebar_top">
        <button onClick={toggle}>
          <BiAlignMiddle
            size={30}
            style={{ backgroundColor: "#3043d6be", color: "#fff" }}
          />
        </button>
      </div>
      <aside style={{ display: showMe ? "block" : "none" }} className="sidebar">
        <ul className="sidebar_list">
          <li className="sidebar_item">
            <Link href="/" className="sidebar_link">
              <span className="sidebar_icon">
                <BiChevronUp size={20} />
                <BiMessage size={20} />
              </span>
              <span className="sidebar_name">
                {" "}
                <HiAdjustmentsHorizontal size={20} />
                <AiOutlineClose size={20} />
              </span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default StickyDiv;
