import { GET_APP_CALL } from "@/constants";
import appleImg from "@/public/images/apple-c.png";
import fbImg from "@/public/images/fb-c.png";
import footerChargeImg from "@/public/images/footer-charge-c.png";
import linkedInImg from "@/public/images/li-c.png";
import playImg from "@/public/images/playstore-c.png";
import logoImg from "@/public/images/the-logo-c.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Padding from "./padding";

export default function Footer() {
  return (
    <div className="bg-[#1C211F] py-12 text-white md:py-24" id="footer">
      <Padding className="py-0">
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="cursor-pointer">
              <ExportedImage
                src={logoImg}
                height={40}
                width={80}
                alt="Our logo"
              />
            </Link>
            <div className="text-[#EDF0EF]">
              Mobile EV charge that has your back
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:mb-6 max-sm:mt-10">
            <div className="mb-2 text-lg font-medium">{GET_APP_CALL}</div>
            <div className="flex flex-row items-center gap-2 md:flex-col">
              <div className="flex cursor-pointer items-center gap-1 rounded-lg border border-gray-500 p-2 text-white active:opacity-50">
                <div>
                  <ExportedImage
                    src={appleImg}
                    width={20}
                    height={20}
                    alt="Get on app store"
                  />
                </div>
                <div>
                  <div className="text-[9px]">COMING SOON ON</div>
                  <div className="text-[13px] font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-1 rounded-lg border border-gray-500 p-2 text-white active:opacity-50">
                <div>
                  <ExportedImage
                    src={playImg}
                    width={20}
                    height={20}
                    alt="Get on play store"
                  />
                </div>
                <div>
                  <div className="text-[9px]">COMING SOON ON</div>
                  <div className="text-[13px] font-semibold">Google play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-7 md:flex-row md:gap-10 md:text-sm">
          <Link
            href={"/about"}
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            About us
          </Link>
          <Link
            href="/pricing"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            Pricing
          </Link>
          <Link
            href="/faqs"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            FAQs
          </Link>
          <Link
            href="/careers"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            Contact us
          </Link>
          <Link
            href="/policy"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            Privacy policy
          </Link>
          <Link
            href="/conditions"
            className={`cursor-pointer md:hover:text-[${process.env.NEXT_PUBLIC_PG}] active:opacity-60`}
          >
            Terms & Conditions
          </Link>
        </div>
      </Padding>
      <div className="my-8 flex items-center justify-center px-2 md:my-16">
        <ExportedImage src={footerChargeImg} alt="charge" />
      </div>
      <Padding>
        <div className="mb-2 h-[1px] w-full bg-gray-400" />
        <div className="flex items-center justify-between text-[#8C9E96] ">
          <div className=" text-sm">
            &copy; 2024 Charge Me. All Rights Reserved
          </div>
          <div className="flex items-center gap-3">
            <div className="text-lg font-extrabold">X</div>
            <div>
              <ExportedImage
                src={linkedInImg}
                width={15}
                height={15}
                alt="Linked in"
              />
            </div>
            <div>
              <ExportedImage
                src={fbImg}
                width={15}
                height={15}
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
}
