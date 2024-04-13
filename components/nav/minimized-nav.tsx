"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/public/the-logo.png";
import Padding from "../padding";
import BtnLink from "../btn-link";
import { EXPANDED_NAV_HEIGHT, NORNAL_NAV_HEIGHT, PRIMARY_BLUE } from "@/constants";

export default function MinimizedTopNav() { 
  const transparentStyle = `bg-transparent h-[125px]`;
  const nonTransparentStyle = `bg-[${PRIMARY_BLUE}] shadow-lg h-[100px]`;

  const navIsOpen = useRef(false);
  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState("");

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 125) {
      setDynamicStyles(nonTransparentStyle);
    } else {
      if (navIsOpen.current) {
        setDynamicStyles(nonTransparentStyle);
      } else {
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
  }, [navIsOpen, openNav]);

  return (
    <header
      style={{ transition: "all 0.35s linear" }}
      className={`
       text-white fixed right-0 left-0 z-10 transition-all py-2 ${dynamicStyles}`}
    >
      <Padding className={`flex h-full items-center justify-between`}>
        <div className="w-fit h-full flex items-center">
          <Link
            onClick={() => {
              scrollHandler();
            }}
            href={"/"}
            className="cursor-pointer h-full w-full hover:opacity-75 active:opacity-50"
          >
            <Image src={logoImg} className={`h-full w-full`} alt="Our logo" />
          </Link>
        </div>
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
      </Padding>
      <Padding className={`${openNav ? `block bg-[${primaryBlue}] h-screen` : "hidden"} pt-7 gap-6 text-lg`}>
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
          href={"/pricing"}
          className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
        >
          Pricing
        </Link>
        <Link
          href={"/faqs"}
          className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
        >
          FAQs
        </Link>
        <Link
          href={"/careers"}
          className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
        >
          Careers
        </Link>
        <Link
          href={"/contact"}
          className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
        >
          Contact us
        </Link>
        <BtnLink title="Access App" />
      </Padding>
    </header>
  );
}
