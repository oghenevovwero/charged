import greenTickImg from "@/public/images/green-tick-c.png";
import { PricingPlan } from "@/types";
import ExportedImage from "next-image-export-optimizer";
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
    md:hover:scale-[98%] 
    hover:opacity-90
    hover:shadow-lg
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
                <ExportedImage
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
        <Link href="/pricing#footer" className="scroll">
          <div
            className={`w-full cursor-pointer rounded-lg border border-[#00A54D] bg-white 
          py-[14px]
          text-center 
          text-sm           
          font-medium transition-transform duration-300 hover:scale-[97.5%] active:opacity-50`}
          >
            Get started now
          </div>
        </Link>
      </div>
    </div>
  );
}
