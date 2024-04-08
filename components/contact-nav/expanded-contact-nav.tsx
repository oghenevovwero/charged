import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/the-logo.png";

export default function ExpandedContactNav() {
  return (
    <div
      className={`fixed flex z-10 text-semibold text-lg bg-white text-black shadow-xl left-0 top-0 right-0`}
    >
      <div
        className="
        py-2
        px sm:px-8 md:px-16 lg:px-32 xl:px-44
        flex 
        justify-between 
        items-center 
        text-lg w-full"
      >
        <Link href={"/"} className="cursor-pointer hover:opacity-75 active:opacity-100">
          <Image src={logoImg} height={30} width={70} alt="Our logo" />
        </Link>
        <div className="flex gap-16 xl:gap-20 justify-around items-center">
          <div className="flex gap-16 xl:gap-20 justify-around items-center">
            <Link
              href={"/about"}
              className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            >
              <div>About</div>
              <div>us</div>
            </Link>
            <Link
              href={"#"}
              className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            >
              <div>How</div>
              <div>it</div>
              <div>works</div>
            </Link>
            <Link href={"/pricing"} className="cursor-pointer hover:opacity-75 active:opacity-50">
              Pricing
            </Link>
            <Link href={"/faqs"} className="cursor-pointer hover:opacity-75 active:opacity-50">
              FAQs
            </Link>
            <Link href={"/careers"} className="cursor-pointer hover:opacity-75 active:opacity-50">
              Careers
            </Link>
            <Link
              href={"/contact"}
              className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            >
              <div>Contact</div>
              <div>us</div>
            </Link>
            <button className="bg-[#00A63D] cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
              <div className="flex gap-1">
                <div>Access</div>
                <div>App</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
