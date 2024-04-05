"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MinimizedTopNav() {
  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState("bg-transparent text-white");

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 230) {
      setDynamicStyles("bg-gray-600 text-white shadow-lg");
    } else {
      if (window.scrollY <= window.screen.height - 230) {
        setDynamicStyles("bg-transparent text-white");
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
      <div className="flex flex-col gap-5">
        <div
          className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
          onClick={() => {
            setDynamicStyles("bg-white text-black shadow-lg");
          }}
        >
          About us
        </div>
        <div
          className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
          onClick={() => {
            setDynamicStyles("bg-white text-black shadow-lg");
          }}
        >
          How it works
        </div>
        <div
          className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
          onClick={() => {
            setDynamicStyles("bg-white text-black shadow-lg");
          }}
        >
          FAQs
        </div>
        <div className="flex gap-2 hover:cursor-pointer hover:opacity-50 items-center">
          <div>
            <Image src={"/global.png"} width={20} height={20} alt="english language" />
          </div>
          <div>EN</div>
        </div>
        <button className="bg-[#00A63D] hover:cursor-pointer hover:bg-[#2f794a] text-white px-2 py-2 rounded-md font-light">
          Access App
        </button>
      </div>
    );
  };

  return (
    <header
      style={{ transition: "all 0.35s linear" }}
      className={`fixed top-0 left-0 right-0 z-10 ${dynamicStyles}`}
    >
      <div className="mx-auto lg:flex items-center lg:justify-between">
        <div className={`flex items-center py-[10px] justify-between px-4`}>
          <div
            className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
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
          } mt-2 flex flex-col gap-4 px-2 pb-5 rounded ${dynamicStyles}`}
        >
          {navElements()}
        </div>
      </div>
    </header>
  );
}
