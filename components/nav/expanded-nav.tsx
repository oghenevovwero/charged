import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExpandedNav() {
  const transparentStyle = "bg-transparent text-white";
  const nonTransparentStyle = "bg-gray-600 text-white shadow-lg";

  const [dynamicStyles, setDynamicStyles] = useState(transparentStyle);

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
      className={`fixed flex left-0 right-0 z-10 h-fit text-semibold text-lg ${dynamicStyles}`}
    >
      <div
        className="
        py-2
        px-2
        lg:px-20
        xl-px-40
        flex 
        justify-between 
        items-center 
        text-lg w-full"
      >
        <div
          className="hover:cursor-pointer hover:opacity-75 active:opacity-100"
          onClick={() => {
            scrollHandler();
          }}
        >
          <Image src={"/the-logo.png"} height={40} width={80} alt="Our logo" />
        </div>
        <div className="flex gap-16 xl:gap-20 justify-around items-center">
          <div
            className="hover:cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            onClick={() => {
              setDynamicStyles(nonTransparentStyle);
            }}
          >
            <div>About</div>
            <div>us</div>
          </div>
          <div
            className="hover:cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
            onClick={() => {
              setDynamicStyles(nonTransparentStyle);
            }}
          >
            <div>How</div>
            <div>it</div>
            <div>works</div>
          </div>
          <div
            className="hover:cursor-pointer hover:opacity-75 active:opacity-50"
            onClick={() => {
              setDynamicStyles(nonTransparentStyle);
            }}
          >
            FAQs
          </div>
          <div className="flex gap-1 hover:cursor-pointer hover:opacity-75 items-center">
            <div className="h-5 w-5">
              <Image src={"/global.png"} width={20} height={20} alt="english language" />
            </div>
            <div>EN</div>
          </div>
          <button className="bg-[#00A63D] hover:cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
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
