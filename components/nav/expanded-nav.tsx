import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ExpandedNav() {
  const isHome = useRef(true);
  const [dynamicStyles, setDynamicStyles] = useState("bg-transparent text-white");

  const scrollHandler = () => {
    if (!isHome.current) {
      return;
    }
    if (window.scrollY >= window.screen.height - 260) {
      setDynamicStyles("bg-gray-600 text-white shadow-lg");
    } else {
      if (window.scrollY <= window.screen.height - 260) {
        setDynamicStyles("bg-transparent text-white");
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
      className={`fixed flex left-0 right-0 z-10 h-24 text-semibold text-lg ${dynamicStyles}`}
    >
      <div
        className="
        py-2
        px-2
        lg:px-36
        flex 
        justify-between 
        items-center 
        text-lg w-full"
      >
        <div
          className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
          onClick={() => {
            isHome.current = true;
            scrollHandler();
          }}
        >
          <Image src={"/the-logo.png"} height={40} width={100} alt="Our logo" />
        </div>
        <div className="flex gap-20 justify-around items-center">
          <div
            className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
            onClick={() => {
              isHome.current = false;
              setDynamicStyles("bg-black text-white shadow-lg");
            }}
          >
            About us
          </div>
          <div
            className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
            onClick={() => {
              isHome.current = false;
              setDynamicStyles("bg-black text-white shadow-lg");
            }}
          >
            How it works
          </div>
          <div
            className="hover:cursor-pointer hover:opacity-50 active:opacity-50"
            onClick={() => {
              isHome.current = false;
              setDynamicStyles("bg-black text-white shadow-lg");
            }}
          >
            FAQs
          </div>
          <div className="flex gap-2 hover:cursor-pointer hover:opacity-50 items-center">
            <div>
              <Image src={"/global.png"} width={20} height={20} alt="english language" />
            </div>
            <div>EN</div>
          </div>
          <button className="bg-[#00A63D] hover:cursor-pointer hover:bg-[#2f794a] text-white px-2 py-2 rounded-md font-light">
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
