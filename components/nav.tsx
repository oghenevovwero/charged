"use client";

import logoImg from "@/public/images/the-logo-c.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BtnLink from "./btn-link";
import Padding from "./padding";

type Props = {
  alwaysOpaque?: boolean;
};

export default function ResponsiveNavigation({ alwaysOpaque = false }: Props) {
  const [shouldBeOpaque, setShouldBeOpaque] = useState(true);

  const [openNav, setOpenNav] = useState(false);
  const pathName = usePathname();
  const navIsOpen = useRef(false);

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 250) {
      setShouldBeOpaque(true);
    } else {
      if (navIsOpen.current) {
        setShouldBeOpaque(true);
      } else {
        setShouldBeOpaque(false);
      }
    }
  };

  useEffect(() => {
    if (!alwaysOpaque) {
      scrollHandler();
      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
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
    <div className={`flex w-full flex-col gap-7 pt-7`}>
      {aboutUs}
      {pricing}
      {faqs}
      {careers}
      {contactUs}
      {accessApp}
    </div>
  );

  return (
    <Padding
      className={`
        fixed 
        inset-x-0
        top-0
        z-10       
        overflow-clip      
        pt-1
        text-lg 
        text-white 
        transition-all
        duration-300
        ${shouldBeOpaque ? "bg-[#1A202B] shadow-xl" : "bg-transparent"}
        ${openNav ? "h-screen" : shouldBeOpaque ? "h-20" : "h-28"}
        `}
    >
      <div className={`flex h-fit w-full items-center justify-between`}>
        <Link href={"/"}>
          <ExportedImage
            src={logoImg}
            className={`${shouldBeOpaque ? "w-20" : "w-28"} cursor-pointer transition-all md:hover:scale-[97.5%]`}
            alt="Our logo"
          />
        </Link>
        <div className="lg:hidden">{minimizedOpenContent}</div>
        <div className="max-lg:hidden">{expandedOpenContent}</div>
      </div>
      {expandedContentOnSmallScreens}
    </Padding>
  );
}
