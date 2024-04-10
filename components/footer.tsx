import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/the-logo.png";
import appleImg from "@/public/apple.png";
import playImg from "@/public/footer-play.png";
import footerChargeImg from "@/public/footer-charge.png";
import Padding from "./padding";

export default function Footer() {
  return (
    <div className="bg-[#1C211F] py-12 md:py-24 text-[#EDF0EF]">
      <Padding className="py-0">
        <div className="flex flex-col mb-6 sm:flex-row sm:justify-between items-start">
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="cursor-pointer">
              <Image src={logoImg} height={40} width={100} alt="Our logo" />
            </Link>
            <div>Mobile EV charge that has your back</div>
          </div>
          <div className="flex flex-col max-sm:mb-6 max-sm:mt-10 gap-2">
            <div className="mb-2 text-lg font-medium">Download our app now</div>
            <div className="flex flex-row md:flex-col gap-2 justify-center items-center">
              <div className="p-2 active:opacity-50 cursor-pointer rounded-lg text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image
                    src={appleImg}
                    width={20}
                    height={20}
                    alt="Get on app store"
                    quality={100}
                  />
                </div>
                <div>
                  <div className="text-[9px]">Download on the</div>
                  <div className="text-[13px] font-semibold">App Store</div>
                </div>
              </div>
              <div className="p-2 active:opacity-50 rounded-lg cursor-pointer text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image
                    src={playImg}
                    width={20}
                    height={20}
                    alt="Get on play store"
                    quality={100}
                  />
                </div>
                <div>
                  <div className="text-[9px]">GET IT ON</div>
                  <div className="text-[13px] font-semibold">Google play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col md:flex-row gap-4 text-gray-300">
          <Link href={"/about"} className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            About us
          </Link>
          <Link
            href="/pricing"
            className="cursor-pointer md:hover:opacity-75 active:opacity-60"
          >
            Pricing
          </Link>
          <Link href="/faqs" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            FAQs
          </Link>
          <Link href="/careers" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            Careers
          </Link>
          <Link href="/roles" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            Roles
          </Link>
          <Link href="/contact" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            Contact us
          </Link>
          <Link href="/policy" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            Privacy policy
          </Link>
          <Link href="/conditions" className="cursor-pointer md:hover:opacity-75 active:opacity-60">
            Terms & Conditions
          </Link>
        </div>
      </Padding>
      <div className="flex justify-center items-center my-8 md:my-16 px-2">
        <Image src={footerChargeImg} alt="charge" quality={100} />
      </div>
      <Padding className="">
        <div className="h-[1px] bg-gray-400 w-full mb-2" />
        <div className="flex justify-between items-center text-[#8C9E96] ">
          <div className=" text-sm">&copy; 2024 Charge Me. All Rights Reserved</div>
          <div className="flex gap-3 items-center">
            <div className="font-extrabold text-lg">X</div>
            <div>
              <Image src={"/li.png"} width={15} height={15} alt="Linked in" />
            </div>
            <div>
              <Image src={"/fb.png"} width={15} height={15} alt="Facebook" />
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
}
