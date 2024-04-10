import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/the-logo.png";
import Padding from "../padding";

export default function ExpandedNav() {
  const transparentStyle = "bg-transparent text-white";
  const nonTransparentStyle = "bg-gray-700 text-white shadow-lg";

  const [dynamicStyles, setDynamicStyles] = useState(nonTransparentStyle);

  const scrollHandler = () => {
    if (window.scrollY >= window.screen.height - 230) {
      setDynamicStyles(nonTransparentStyle);
    } else {
      if (window.scrollY <= window.screen.height - 230) {
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
  }, []);

  return (
    <div
      style={{ transition: "all 0.35s linear" }}
      className={`fixed h-[155px] flex left-0 right-0 z-10 text-semibold text-lg ${dynamicStyles}`}
    >
      <Padding
        className="
        py-2
        flex 
        justify-between 
        items-center
        w-full"
      >
        <Link
          href={"/"}
          className="cursor-pointer hover:opacity-75 active:opacity-100"
          onClick={() => {
            scrollHandler();
          }}
        >
          <div className="">
            <Image src={logoImg} height={134} width={153} alt="Our logo" />
          </div>
        </Link>
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
          <Link href={"/roles"} className="cursor-pointer hover:opacity-75 active:opacity-50">
            Roles
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
          <button className="bg-[#00A63D] font-medium cursor-pointer hover:opacity-75 active:opacity-100 text-white px-[33px] py-[14px] rounded-md ">
            <div className="flex gap-1">
              <div>Access</div>
              <div>App</div>
            </div>
          </button>
        </div>
      </Padding>
    </div>
  );
}
