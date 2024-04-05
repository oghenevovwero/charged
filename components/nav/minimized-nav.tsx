"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MinimizedTopNav() {
  const transparentStyle = "bg-transparent text-white";
  const nonTransparentStyle = "bg-gray-600 text-white shadow-lg";

  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState(transparentStyle);

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 230) {
      setDynamicStyles(nonTransparentStyle);
    } else {
      if (window.scrollY <= window.screen.height - 230) {
        setDynamicStyles(transparentStyle);
      }
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navElements = () => {
    return (
      <div className="flex flex-col gap-5 text-xl font-light">
        <div
          className="hover:cursor-pointer w-fit hover:opacity-75 active:opacity-50"
          onClick={() => {
            setDynamicStyles(nonTransparentStyle);
          }}
        >
          About us
        </div>
        <div
          className="hover:cursor-pointer w-fit hover:opacity-75 active:opacity-50"
          onClick={() => {
            setDynamicStyles(nonTransparentStyle);
          }}
        >
          How it works
        </div>
        <div
          className="hover:cursor-pointer w-fit hover:opacity-75 active:opacity-50"
          onClick={() => {
            setDynamicStyles(nonTransparentStyle);
          }}
        >
          FAQs
        </div>
        <div
          className="hover:cursor-pointer w-fit hover:opacity-75 active:opacity-50"
          onClick={() => {
            setDynamicStyles(nonTransparentStyle);
          }}
        >
          Reach us
        </div>
        {/* <div className="flex w-fit gap-2 hover:cursor-pointer hover:opacity-75 items-center">
          <div>
            <Image src={"/global.png"} width={20} height={20} alt="english language" />
          </div>
          <div>EN</div>
        </div> */}
        <div className="w-fit">
          <button className="bg-[#00A63D] hover:cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
            Access App
          </button>
        </div>
      </div>
    );
  };

  return (
    <header
      style={{ transition: "all 0.35s linear" }}
      className={`fixed top-0 left-0 right-0 z-10 ${dynamicStyles}`}
    >
      <div className="mx-auto lg:flex items-center lg:justify-between">
        <div className={`flex items-center py-[10px] justify-between pr-2 pl-4`}>
          <div
            className="hover:cursor-pointer hover:opacity-75 active:opacity-50"
            onClick={() => {
              scrollHandler();
            }}
          >
            <Image src={"/the-logo.png"} height={35} width={70} alt="Our logo" />
          </div>
          <button
            onClick={() => setOpenNav((prev) => !prev)}
            className="block lg:hidden p-2 rounded focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex space-x-4">{navElements()}</nav>
        <div
          className={`${
            openNav ? "" : "hidden"
          } mt-2 flex flex-col gap-4 px-4 pb-5 rounded ${dynamicStyles}`}
        >
          {navElements()}
        </div>
      </div>
    </header>
  );
}
