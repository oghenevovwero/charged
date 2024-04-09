import Image from "next/image";
import greenTickImg from "@/public/green-tick.png";

type PlanProps = {
  plan: string;
  duration: string;
  features: string[];
  recommended: boolean;
  cost: string;
};

export default function Plan({ plan, cost, duration, features, recommended }: PlanProps) {
  return (
    <div className="rounded-lg border shadow-lg p-2 md:p-3 lg:p-5">
      <div>
        <div className="flex items-center gap-5">
          <div className="font-bold text-lg">{plan}</div>
          {recommended && (
            <div className="text-[11px]  bg-[#E5F5FF] text-[#00A0FF] rounded-xl px-[6px] py-[3px]">
              Recommended
            </div>
          )}
        </div>
        <div className="my-10">
          <span className="font-extrabold text-5xl">${cost}</span>
          <span className="text-[11px]  align-sub">/ {duration}</span>
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-[1]">
                <Image src={greenTickImg} width={30} height={30} alt="included in plan" />
              </div>
              <div className="text-sm font-bold flex-[10]">{feature}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-10">
        <button className="border bg-white rounded-lg w-full p-2 cursor-pointer active:opacity-50 font-medium text-lg border-[#00A63D]">Get started</button>
      </div>
    </div>
  );
}
