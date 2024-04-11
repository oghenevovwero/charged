import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/the-logo.png";
import Padding from "../padding";

export default function ExpandedContactNav() {
  return (
    <nav
      className={`fixed h-[94px] flex z-10 text-semibold text-lg bg-[#1A202B] text-white shadow-lg left-0 top-0 right-0`}
    >
      <Padding
        className="
        py-2
        flex 
        justify-between 
        items-center
        
        w-full"
      >
        <Link href={"/"} className="cursor-pointer hover:opacity-75 active:opacity-100">
          <Image src={logoImg} height={80} width={100} alt="Our logo" />
        </Link>
        <div className="flex gap-6 justify-around items-center">
          <Link
            href={"/about"}
            className="cursor-pointer hover:opacity-75 active:opacity-50 flex items-center gap-1"
          >
            <div>About</div>
            <div>us</div>
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
          <button className="bg-[#00A63D] font-medium cursor-pointer hover:opacity-75 active:opacity-100 text-white px-[33px] py-[14px] rounded-md ">
            <div className="flex gap-1">
              <div>Access</div>
              <div>App</div>
            </div>
          </button>
        </div>
      </Padding>
    </nav>
  );
}
