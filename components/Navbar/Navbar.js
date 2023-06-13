"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useUser } from "../Context/UserContext";
import CartDrawer from "./../CartDrawer/CartDrawer";

const Navbar = () => {
  const { user, logout } = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleCartDrawer = () => {
    setCartOpen((prevCartOpen) => !prevCartOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };
  const handleOptionHover = (option) => {
    setActiveOption(option);
  };
  const handleLinkClick = () => {
    setDropdownOpen(false);
  };
  const renderNavigationContent = () => {
    if (open) {
      return (
        <div className="h-[90vh] min-h-full pt-4 bg-cyan-500 text-white">
          <div className="container grid grid-cols-2 gap-4 mx-auto">
            <div className="text-4xl">
              <ul className="space-y-4 font-semibold">
                <li>Sustainability</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderCartDrawer = () => {
    const email = "n@gmail.com";
    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCartItems(data.cartItems);
        });
    }, [cartItems]);
    if (cartOpen) {
      return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-25">
          <div className="w-1/3 h-screen bg-white">
            <div className="flex justify-end p-2">
              <button onClick={toggleCartDrawer}>
                <AiOutlineClose size={30} />
              </button>
            </div>
            <div className="container px-8 mx-auto">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping Cart
              </h2>
              {cartItems?.map((item) => {
                return (
                  <div className="" key={item._id}>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.category}
                                </p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">{item.price}</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    {item.quantity}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {cartItems.length > 0 ? (
                <div className="mt-6">
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </Link>
                </div>
              ) : (
                <div className="mt-6">
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    No Items available in the Cart
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderOptionContent = () => {
    switch (activeOption) {
      case "women":
        return (
          <div className="content h-[70vh]  pt-4 bg-cyan-500 text-white">
            Content list for Women
          </div>
        );
      case "man":
        return (
          <div className="content h-[70vh]  pt-4 bg-cyan-500 text-white">
            Content list for Men
          </div>
        );
      case "babies":
        return (
          <div className="content h-[70vh]  pt-4 bg-cyan-500 text-white">
            Content list for Babies
          </div>
        );
      default:
        return null;
    }
  };
  const renderDropdownContent = () => {
    if (dropdownOpen) {
      return (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-md right-12 w-36">
          {!user?.value && (
            <Link
              href="/signup"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <button onClick={handleLinkClick}>SignUp</button>
            </Link>
          )}
          {user?.value && (
            <>
              <Link
                href="/"
                onClick={logout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <button onClick={handleLinkClick}>logout</button>
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <button onClick={handleLinkClick}>Dashboard</button>
              </Link>
            </>
          )}
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <div className="text-center text-white bg-black">
        <marquee>Free shipping & returns for Canada & USA.</marquee>
      </div>
      <section
        className={`flex border-b-4 border-black h-[10vh] ${
          activeOption || open ? "bg-cyan-400" : ""
        } `}
      >
        <div className="border-r-4 border-black">
          <div className="p-4">
            <button onClick={toggleDrawer}>
              {open ? (
                <AiOutlineClose size={30} />
              ) : (
                <HiOutlineBars3CenterLeft size={30} />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center p-4 space-x-2 font-semibold">
          <div
            className={`option ${
              activeOption === "women" ? "active underline" : ""
            }`}
            onMouseEnter={() => handleOptionHover("women")}
            onMouseLeave={() => handleOptionHover(null)}
          >
            Women
          </div>
          <div
            className={`option ${
              activeOption === "man" ? "active underline" : ""
            }`}
            onMouseEnter={() => handleOptionHover("man")}
            onMouseLeave={() => handleOptionHover(null)}
          >
            Man
          </div>
          <div
            className={`option  ${
              activeOption === "babies" ? "active underline" : ""
            }`}
            onMouseEnter={() => handleOptionHover("babies")}
            onMouseLeave={() => handleOptionHover(null)}
          >
            Babies
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto text-lg font-bold tracking-widest">
          KWS
        </div>
        <div className="flex items-center pr-4 space-x-4">
          <div>English</div>
          <div className="z-10">
            {!cartOpen && (
              <button onClick={toggleDropdown}>
                <SlUser />
              </button>
            )}
            {renderDropdownContent()}
          </div>
        </div>
        <div className="border-l-4 border-black">
          <div className="p-4">
            <button onClick={toggleCartDrawer}>
              <FiShoppingCart size={30} />
            </button>
          </div>
        </div>
      </section>
      {renderNavigationContent()}
      {renderOptionContent()}
      {renderCartDrawer()}
    </>
  );
};

export default Navbar;
