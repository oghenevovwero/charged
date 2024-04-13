"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/the-logo.png";
import Padding from "../padding";
import { extendedNavHeight, normalNavHeight, primaryBlue } from "@/constants";
import BtnLink from "../btn-link";

export default function ExpandedNav() {
  const transparentStyle = `bg-transparent text-white pt-2 h-[${extendedNavHeight}px]`;
  const nonTransparentStyle = `bg-[${primaryBlue}] text-white shadow-lg py-2 h-[${normalNavHeight}px]`;

  const [dynamicStyles, setDynamicStyles] = useState(nonTransparentStyle);

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - extendedNavHeight) {
      setDynamicStyles(nonTransparentStyle);
    } else {
      setDynamicStyles(transparentStyle);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      style={{ transition: "all 0.35s linear" }}
      className={`fixed  flex left-0 right-0 z-10 text-semibold text-lg ${dynamicStyles}`}
    >
      <Padding
        className="
        flex 
        justify-between 
        items-center
        h-full
        w-full"
      >
        <div className="h-full w-fit flex items-center">
          <Link
            href={"/"}
            className="cursor-pointer h-full w-full hover:opacity-75 active:opacity-100"
            onClick={() => {
              scrollHandler();
            }}
          >
            <Image src={logoImg} className="w-full h-full" alt="Our logo" />
          </Link>
        </div>
        <div className="flex gap-6 justify-around items-center font-medium">
          <Link
            href={"/about"}
            className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            onClick={() => {
              scrollHandler();
            }}
          >
            <div>About</div>
            <div>us</div>
          </Link>

          <Link
            href={"/pricing"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
            onClick={() => {
              scrollHandler();
            }}
          >
            Pricing
          </Link>
          <Link
            href={"/faqs"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
            onClick={() => {
              scrollHandler();
            }}
          >
            FAQs
          </Link>
          <Link
            href={"/careers"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
            onClick={() => {
              scrollHandler();
            }}
          >
            Careers
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            onClick={() => {
              scrollHandler();
            }}
          >
            <div>Contact</div>
            <div>us</div>
          </Link>
          <BtnLink title="Access App" />
        </div>
      </Padding>
    </nav>
  );
}
