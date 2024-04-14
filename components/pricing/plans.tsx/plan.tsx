import greenTickImg from "@/public/green-tick.png";
import { PricingPlan } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Plan({
  plan,
  cost,
  duration,
  features,
  recommended,
}: PricingPlan) {
  return (
    <div
      className="
    cursor-pointer 
    rounded-lg 
    border 
    p-2 
    shadow-md 
    transition-transform 
    duration-300
    hover:scale-[97.5%] 
    hover:opacity-90
    hover:shadow-xl
    md:p-3
    lg:p-5
    "
    >
      <div>
        <div className="flex items-center gap-3">
          <div className="text-lg font-medium">{plan}</div>
          {recommended && (
            <div className="rounded-xl  bg-[#E5F5FF] px-[6px] py-[2px] text-[11px] text-[#00A0FF]">
              Recommended
            </div>
          )}
        </div>
        <div className="mb-8 mt-6">
          <span className="text-5xl font-bold">${cost}</span>
          <span className="align-sub  text-[11px]">/ {duration}</span>
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-[6px]">
              <div className="flex-[1]">
                <Image
                  src={greenTickImg}
                  width={20}
                  height={20}
                  alt="included in plan"
                />
              </div>
              <div className="flex-[10] text-sm font-medium">{feature}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 w-full">
        <Link href="/contact">
          <div
            className={`w-full cursor-pointer rounded-lg border border-[#00A63D] bg-white 
          py-[14px]
          text-center 
          text-sm           
          font-medium transition-transform duration-300 hover:scale-95 active:opacity-50`}
          >
            Get started
          </div>
        </Link>
      </div>
    </div>
  );
}
