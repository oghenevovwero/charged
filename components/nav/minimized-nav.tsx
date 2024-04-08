"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/public/the-logo.png";

export default function MinimizedTopNav() {
  const navIsOpen = useRef(false);
  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState("");

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 230) {
      setDynamicStyles("bg-gray-700");
    } else {
      if (navIsOpen.current) {
        setDynamicStyles("bg-gray-700");
      } else {
        setDynamicStyles("bg-transparent");
      }
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [navIsOpen, openNav]);

  return (
    <header
      className={`${
        openNav ? "h-screen" : "h-20"
      } text-white fixed inset-0 z-10 transition-all ${dynamicStyles}`}
    >
      <div className="h-full">
        <div className={`flex h-20 items-center justify-between px-4`}>
          <Link
            onClick={() => {
              scrollHandler();
            }}
            href={"/"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
          >
            <Image src={logoImg} height={35} width={70} alt="Our logo" />
          </Link>
          <button
            onClick={() => {
              setOpenNav((prev) => {
                navIsOpen.current = !prev;
                return !prev;
              });
            }}
            className="block lg:hidden rounded focus:outline-none"
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
        <div
          style={{ display: openNav ? "block" : "none" }}
          className={`p-4 h-full gap-6 text-xl font-light`}
        >
          <Link
            onClick={() => {
              scrollHandler();
            }}
            href={"/about"}
            className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
          >
            About us
          </Link>
          <Link
            href={"#"}
            className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
          >
            How it works
          </Link>
          <Link
            href={"/faqs"}
            className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
          >
            FAQs
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
          >
            Contact us
          </Link>
          <div className="w-fit">
            <button className="bg-[#00A63D] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-2 rounded-md">
              Access App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}