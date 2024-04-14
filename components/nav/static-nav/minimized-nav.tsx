"use client";

import logoImg from "@/public/the-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Padding from "../../padding";

export default function MinimizedStaticNav() {
  const navIsOpen = useRef(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav
      className={`${
        openNav ? "h-screen" : "h-fit"
      } fixed inset-0 z-10 text-white transition-all bg-[${
        process.env.NEXT_PUBLIC_PB
      }] shadow-lg`}
    >
      <Padding
        className={`flex h-[${process.env.NEXT_PUBLIC_NH}px] items-center justify-between`}
      >
        <div className="h-full w-fit py-2">
          <Link
            href={"/"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
          >
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
      <Padding className={`${openNav ? "block" : "hidden"} pt-5  text-xl`}>
        <Link
          href={"/about"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        >
          About us
        </Link>

        <Link
          href={"/pricing"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        >
          Pricing
        </Link>
        <Link
          href={"/faqs"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        >
          FAQs
        </Link>
        <Link
          href={"/careers"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        >
          Careers
        </Link>
        <Link
          href={"/contact"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        ></Link>
        <Link
          href={"/contact"}
          className="mb-7 block w-fit cursor-pointer hover:opacity-75 active:opacity-50"
        >
          Contact us
        </Link>
        <div className="w-fit">
          <button
            className={`bg-[${process.env.NEXT_PUBLIC_PG}] cursor-pointer rounded-md px-2 py-2 text-white hover:opacity-70 active:opacity-100`}
          >
            Access App
          </button>
        </div>
      </Padding>
    </nav>
  );
}
