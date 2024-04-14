"use client";

import { EXPANDED_NAV_HEIGHT, PRIMARY_BLUE } from "@/constants";
import logoImg from "@/public/the-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BtnLink from "../../btn-link";
import Padding from "../../padding";
import { usePathname } from "next/navigation";

export default function MinimizedDynamicNav() {
  const transparentStyle = `bg-transparent h-28`;
  const nonTransparentStyle = `bg-[${PRIMARY_BLUE}] shadow-xl h-20 sm:h-24`;

  const pathName = usePathname()

  const navIsOpen = useRef(false);
  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState("");

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - EXPANDED_NAV_HEIGHT) {
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
       fixed left-0 right-0 z-10 py-2 text-white transition-all ${dynamicStyles}`}
    >
      <Padding className={`flex h-full items-center justify-between`}>
        <div className="flex h-full w-fit items-center">
          <Link
            href={"/"}
            className="h-full w-full cursor-pointer md:hover:opacity-60 active:opacity-50"
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
          className="block rounded focus:outline-none lg:hidden"
        >
          <svg
            className={`h-6 w-6 ${openNav ? "hidden" : "block"}`}
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
            className={`h-6 w-6 ${openNav ? "block" : "hidden"}`}
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
      <Padding
        className={`${
          openNav ? `block bg-[${PRIMARY_BLUE}] h-screen` : "hidden"
        } gap-6 pt-7 text-lg`}
      >
        <Link
          href={"/about"}
          className={`${pathName === "/about" ? "text-[#00A630]" : ""} mb-7 block w-fit cursor-pointer md:hover:opacity-60 active:opacity-50`}
        >
          About us
        </Link>
        <Link
          href={"/pricing"}
          className={`${pathName === "/pricing" ? "text-[#00A630]" : ""} mb-7 block w-fit cursor-pointer md:hover:opacity-60 active:opacity-50`}
        >
          Pricing
        </Link>
        <Link
          href={"/faqs"}
          className={`${pathName === "/faqs" ? "text-[#00A630]" : ""} mb-7 block w-fit cursor-pointer md:hover:opacity-60 active:opacity-50`}
        >
          FAQs
        </Link>
        <Link
          href={"/careers"}
          className={`${pathName === "/careers" ? "text-[#00A630]" : ""} mb-7 block w-fit cursor-pointer md:hover:opacity-60 active:opacity-50`}
        >
          Careers
        </Link>
        <Link
          href={"/contact"}
          className={`${pathName === "/contact" ? "text-[#00A630]" : ""} mb-7 block w-fit cursor-pointer md:hover:opacity-60 active:opacity-50`}
        >
          Contact us
        </Link>
        <BtnLink title="Access App" />
      </Padding>
    </header>
  );
}
