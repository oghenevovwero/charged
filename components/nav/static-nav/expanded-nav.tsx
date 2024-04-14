"use client";

import logoImg from "@/public/the-logo.png";
import Image from "next/image";
import Link from "next/link";
import BtnLink from "../../btn-link";
import Padding from "../../padding";

export default function ExpandedStaticNav() {
  return (
    <nav
      className={`text-semibold fixed left-0 right-0 top-0 z-10 flex h-[94px] bg-[#1A202B] text-lg text-white shadow-lg`}
    >
      <Padding
        className="
        flex
        w-full 
        items-center 
        justify-between        
        py-2"
      >
        <Link
          href={"/"}
          className="cursor-pointer hover:opacity-75 active:opacity-100"
        >
          <Image src={logoImg} height={80} width={100} alt="Our logo" />
        </Link>
        <div className="flex items-center justify-around gap-6">
          <Link
            href={"/about"}
            className="flex cursor-pointer items-center gap-1 hover:opacity-75 active:opacity-50"
          >
            <div>About</div>
            <div>us</div>
          </Link>

          <Link
            href={"/pricing"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
          >
            Pricing
          </Link>
          <Link
            href={"/faqs"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
          >
            FAQs
          </Link>
          <Link
            href={"/careers"}
            className="cursor-pointer hover:opacity-75 active:opacity-50"
          >
            Careers
          </Link>
          <Link
            href={"/contact"}
            className="flex cursor-pointer items-center gap-1 hover:opacity-75 active:opacity-50"
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
