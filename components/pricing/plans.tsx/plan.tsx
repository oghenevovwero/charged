import Image from "next/image";
import greenTickImg from "@/public/green-tick.png";
import { PricingPlan } from "@/types";

export default function Plan({ plan, cost, duration, features, recommended }: PricingPlan) {
  return (
    <div className="rounded-lg border shadow-md p-2 md:p-3 lg:p-5">
      <div>
        <div className="flex items-center gap-3">
          <div className="font-medium text-lg">{plan}</div>
          {recommended && (
            <div className="text-[11px]  bg-[#E5F5FF] text-[#00A0FF] rounded-xl px-[6px] py-[2px]">
              Recommended
            </div>
          )}
        </div>
        <div className="mt-6 mb-8">
          <span className="font-bold text-5xl">${cost}</span>
          <span className="text-[11px]  align-sub">/ {duration}</span>
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-[6px] items-start">
              <div className="flex-[1]">
                <Image src={greenTickImg} width={20} height={20} alt="included in plan" />
              </div>
              <div className="text-sm font-medium flex-[10]">{feature}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-10">
        <button className={`border bg-white rounded-lg w-full py-[14px] cursor-pointer active:opacity-50 font-medium text-sm border-[${process.env.NEXT_PUBLIC_PG}]`}>Get started</button>
      </div>
    </div>
  );
}
