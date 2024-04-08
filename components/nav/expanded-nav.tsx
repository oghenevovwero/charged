import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/the-logo.png";

export default function ExpandedNav() {
  const transparentStyle = "bg-transparent text-white";
  const nonTransparentStyle = "bg-gray-700 text-white shadow-xl left-1 right-1 rounded-md mt-1";

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
      className={`fixed flex left-0 right-0 z-10 text-semibold text-lg ${dynamicStyles}`}
    >
      <div
        className="
        py-2
        px-2 sm:px-8 md:px-16 lg:px-36
        flex 
        justify-between 
        items-center
        h-[90px]
        w-full"
      >
        <Link
          href={"/"}
          className="cursor-pointer hover:opacity-75 active:opacity-100"
          onClick={() => {
            scrollHandler();
          }}
        >
          <div className="h-20 w-20">
            <Image src={logoImg} alt="Our logo" />
          </div>
        </Link>
        <div className="flex gap-6 justify-around items-center">
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
          <button className="bg-[#00A63D] cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
            <div className="flex gap-1">
              <div>Access</div>
              <div>App</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
