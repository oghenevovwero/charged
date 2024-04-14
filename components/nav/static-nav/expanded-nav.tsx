"use client";

import logoImg from "@/public/the-logo.png";
import Image from "next/image";
import Link from "next/link";
import BtnLink from "../../btn-link";
import Padding from "../../padding";
import { usePathname } from "next/navigation";

export default function ExpandedStaticNav() {
  const pathName = usePathname();
  return (
    <nav
      className={`text-semibold fixed left-0 right-0 top-0 z-10 flex h-[94px] bg-[#1A202B] text-lg text-white shadow-lg`}
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
            className="h-full w-full cursor-pointer hover:opacity-60 active:opacity-100"
          >
            <Image src={logoImg} className="h-full w-full" alt="Our logo" />
          </Link>
        </div>
        <div className="flex items-center justify-around gap-6 font-medium">
          <Link
            href={"/about"}
            className={`${pathName === "/about" ? "text-[#00A630]" : ""} flex cursor-pointer items-center gap-1 hover:opacity-60 active:opacity-50`}
          >
            About us
          </Link>
          <Link
            href={"/pricing"}
            className={`${pathName === "/pricing" ? "text-[#00A630]" : ""} cursor-pointer hover:opacity-60 active:opacity-50`}
          >
            Pricing
          </Link>
          <Link
            href={"/faqs"}
            className={`${pathName === "/faqs" ? "text-[#00A630]" : ""} cursor-pointer hover:opacity-60 active:opacity-50`}
          >
            FAQs
          </Link>
          <Link
            href={"/careers"}
            className={`${pathName === "/careers" ? "text-[#00A630]" : ""} cursor-pointer hover:opacity-60 active:opacity-50`}
          >
            Careers
          </Link>
          <Link
            href={"/contact"}
            className={`${pathName === "/contact" ? "text-[#00A630]" : ""} flex cursor-pointer items-center gap-1 hover:opacity-60 active:opacity-50`}
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
