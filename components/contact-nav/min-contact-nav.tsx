"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/public/the-logo.png";
import Padding from "../padding";

export default function MinimizedContactTopNav() {
  const navIsOpen = useRef(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav
      className={`${
        openNav ? "h-screen" : "h-fit"
      } text-white fixed inset-0 z-10 transition-all bg-[${process.env.primaryBlue}] shadow-lg`}
    >
      <Padding className={`flex h-[${process.env.normalNavHeight}px] items-center justify-between`}>
        <div className="w-fit h-full py-2">
          <Link href={"/"} className="cursor-pointer hover:opacity-75 active:opacity-50">
            <Image src={logoImg} height={50} width={80} alt="Our logo" />
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
      <Padding className={`${openNav ? "block" : "hidden"} text-xl  pt-5`}>
        <Link
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
        ></Link>
        <Link
          href={"/contact"}
          className="cursor-pointer mb-7 block w-fit hover:opacity-75 active:opacity-50"
        >
          Contact us
        </Link>
        <div className="w-fit">
          <button
            className={`bg-[${process.env.primaryGreen}] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-2 rounded-md`}
          >
            Access App
          </button>
        </div>
      </Padding>
    </nav>
  );
}
