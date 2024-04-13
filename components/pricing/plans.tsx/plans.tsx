import Container from "@/components/container";
import Plan from "./plan";
import Image from "next/image";
import vanImg from "@/public/van.png";
import greenTickImg from "@/public/green-tick.png";
import { pricingPlans } from "@/data/pricing-plans";

export default function Plans() {
  return (
    <Container className="bg-white text-black">
      <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-3 lg:gap-10 mb-10">
        {pricingPlans.map((plan) => (
          <Plan key={plan.plan} {...plan} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 mb-12 sm:gap-2 lg:gap-4 rounded-lg shadow-lg px-2 md:px-3 lg:px-5 pt-2 md:pt-3 lg:pt-5 pb-6 md:pb-10 lg:pb-20">
        <div className="">
          <div className="font-bold mb-5 text-2xl">Roadside Assistance</div>
          <div className="">
            Additionally, we offer a standalone roadside assistance plan aimed at providing peace of
            mind to EV owners
          </div>
        </div>

        <div className=" w-full flex flex-col sm:flex-row  sm:items-center">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-8 sm:gap-4">
            <div>
              <span className="font-bold text-5xl">$20</span>
              <span className="text-[11px]  align-sub">/ Month</span>
            </div>

            <div className="w-full flex-1">
              <div className="flex gap-3 mb-5">
                <div className="">
                  <Image src={greenTickImg} width={20} height={20} alt="included in plan" />
                </div>
                <div className="text-sm font-medium">
                  $0 for the first 10kWh during service calls.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <Image src={greenTickImg} width={20} height={20} alt="included in plan" />
                </div>
                <div className="text-sm font-medium">3 service calls per year</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full">
          <button className={`border w-full bg-white cursor-pointer active:opacity-50 rounded-lg px-[33px] py-[14px] font-medium text-sm border-[${process.env.NEXT_PUBLIC_PG}]`}>
            <div className="flex items-center justify-center gap-1">
              <div>Get</div>
              <div>started</div>
            </div>
          </button>
        </div>
      </div>

      <div className="shadow-lg px-2 py-5 md:p-3 lg:p-5 rounded-lg relative min-[1110px]:h-[400px]">
        <div className="font-medium text-lg lg:w-[70%] ">
          We also do One-Time Service Call, For non-subscribers or customers who require occasional
          assistance, we offer one-time service call requests
        </div>
        <div className="max-lg:my-10">
          <Image src={vanImg} alt="van" className="min-[1110px]:float-end" />
        </div>

        <div className="h-full flex flex-col justify-around min-[1110px]:py-20">
          <div className="flex items-end gap-1 max-[1110px]:my-10">
            <div className="font-bold text-5xl">$20</div>
            <div className="align-sub font-medium">for up to 10 kWh</div>
          </div>
          <div className="text-sm font-medium max-[1110px]:mb-6">
            *Additional Charge: $10 for every extra 10 kWh
          </div>
          <div className="text-[12px] ">
            This option caters to individuals who may not require frequent charging services or
            prefer a pay-as-you-go approach.
          </div>
        </div>
      </div>
    </Container>
  );
}
