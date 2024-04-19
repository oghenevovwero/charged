"use client";

import { PRIMARY_BLUE } from "@/constants";
import logoImg from "@/public/images/the-logo-c.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BtnLink from "../btn-link";
import Padding from "../padding";

export default function ResponsiveNavigation() {
  const transparentStyle = `bg-transparent text-white pt-2 h-28`;
  const nonTransparentStyle = `bg-[${PRIMARY_BLUE}] text-white shadow-xl py-2 h-20 sm:h-24`;

  const [dynamicStyles, setDynamicStyles] = useState(nonTransparentStyle);
  const [openNav, setOpenNav] = useState(false);
  const pathName = usePathname();
  const navIsOpen = useRef(false);

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 260) {
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
  });

  const aboutUs = (
    <Link
      href={"/about"}
      className={`${pathName === "/about" ? "text-[#00A630]" : ""} w-fit cursor-pointer active:opacity-50 md:hover:opacity-60`}
    >
      About us
    </Link>
  );
  const pricing = (
    <Link
      href={"/pricing"}
      className={`${pathName === "/pricing" ? "text-[#00A630]" : ""} w-fit cursor-pointer active:opacity-50 md:hover:opacity-60`}
    >
      Pricing
    </Link>
  );
  const faqs = (
    <Link
      href={"/faqs"}
      className={`${pathName === "/faqs" ? "text-[#00A630]" : ""} w-fit cursor-pointer active:opacity-50 md:hover:opacity-60`}
    >
      FAQs
    </Link>
  );
  const careers = (
    <Link
      href={"/careers"}
      className={`${pathName === "/careers" ? "text-[#00A630]" : ""} w-fit cursor-pointer active:opacity-50 md:hover:opacity-60`}
    >
      Careers
    </Link>
  );
  const contactUs = (
    <Link
      href={"/contact"}
      className={`${pathName === "/contact" ? "text-[#00A630]" : ""} w-fit cursor-pointer active:opacity-50 md:hover:opacity-60`}
    >
      Contact us
    </Link>
  );

  const accessApp = <BtnLink title="Access App" />;

  const minimizedOpenContent = (
    <div className={`flex h-full items-center justify-between`}>
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
    </div>
  );

  const expandedOpenContent = (
    <div className="flex items-center justify-around gap-7">
      {aboutUs}
      {pricing}
      {faqs}
      {careers}
      {contactUs}
      {accessApp}
    </div>
  );

  const expandedContentOnSmallScreens = (
    <Padding
      className={`${
        openNav ? `h-screen` : "hidden"
      } flex flex-col gap-7 bg-[#1A202B] pt-7`}
    >
      {aboutUs}
      {pricing}
      {faqs}
      {careers}
      {contactUs}
      {accessApp}
    </Padding>
  );

  return (
    <nav
      className={`
      fixed left-0 right-0 z-10 py-2 text-lg text-white transition-all duration-[350ms] ${dynamicStyles}`}
    >
      <Padding
        className="
        flex 
        h-full 
        w-full
        items-center
        justify-between"
      >
        <div className="flex h-full w-fit items-center">
          <Link
            href={"/"}
            className="h-full w-full cursor-pointer transition-all active:opacity-100 md:hover:scale-95"
          >
            <ExportedImage
              src={logoImg}
              className="h-full w-full"
              alt="Our logo"
            />
          </Link>
        </div>
        <div className="lg:hidden">{minimizedOpenContent}</div>
        <div className="max-lg:hidden">{expandedOpenContent}</div>
      </Padding>
      {expandedContentOnSmallScreens}
    </nav>
  );
}
