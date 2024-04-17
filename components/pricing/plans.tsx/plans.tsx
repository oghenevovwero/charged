import Container from "@/components/container";
import { pricingPlans } from "@/data/pricing-plans";
import greenTickImg from "@/public/images/green-tick-c.png";
import vanImg from "@/public/images/van-c.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Plan from "./plan";

export default function Plans() {
  return (
    <Container className="bg-white text-black">
      <div className="mb-10 flex flex-col justify-between gap-8 sm:flex-row md:gap-3 lg:gap-10">
        {pricingPlans.map((plan) => (
          <Plan key={plan.plan} {...plan} />
        ))}
      </div>

      <div className="mb-12 flex flex-col items-center justify-between gap-10 rounded-lg px-2 pb-6 pt-2 shadow-lg sm:flex-row sm:gap-2 md:px-3 md:pb-10 md:pt-3 lg:gap-4 lg:px-5 lg:pb-20 lg:pt-5">
        <div>
          <div className="mb-5 text-2xl font-bold">Roadside Assistance</div>
          <div>
            Additionally, we offer a standalone roadside assistance plan aimed
            at providing peace of mind to EV owners
          </div>
        </div>

        <div className=" flex w-full flex-col sm:flex-row  sm:items-center">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <div>
              <span className="text-5xl font-bold">$20</span>
              <span className="align-sub  text-[11px]">/ Month</span>
            </div>

            <div className="w-full flex-1">
              <div className="mb-5 flex gap-3">
                <div>
                  <ExportedImage
                    src={greenTickImg}
                    width={20}
                    height={20}
                    alt="included in plan"
                  />
                </div>
                <div className="text-sm font-medium">
                  $0 for the first 10kWh during service calls.
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <ExportedImage
                    src={greenTickImg}
                    width={20}
                    height={20}
                    alt="included in plan"
                  />
                </div>
                <div className="text-sm font-medium">
                  3 service calls per year
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full">
          <Link href="/pricing#footer" className="scroll">
            <div
              className={`w-full cursor-pointer rounded-lg border border-[#00A54D]
              bg-white 
              px-[33px] 
              py-[14px] text-sm font-medium transition-transform duration-300 hover:scale-95 active:opacity-50`}
            >
              <div className="flex items-center justify-center gap-1">
                <div>Get</div>
                <div>started</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="relative rounded-lg px-2 py-5 shadow-lg md:p-3 lg:p-5 min-[1110px]:h-[400px]">
        <div className="text-lg font-medium lg:w-[70%] ">
          We also do One-Time Service Call, For non-subscribers or customers who
          require occasional assistance, we offer one-time service call requests
        </div>
        <div className="max-lg:my-10">
          <ExportedImage src={vanImg} alt="van" className="min-[1110px]:float-end" />
        </div>

        <div className="flex h-full flex-col justify-around min-[1110px]:py-20">
          <div className="flex items-end gap-1 max-[1110px]:my-10">
            <div className="text-5xl font-bold">$125</div>
            <div className="align-sub font-medium">for up to 10 kWh</div>
          </div>
          <div className="text-sm font-medium max-[1110px]:mb-6">
            *Additional Charge: $10 for every extra 10 kWh
          </div>
          <div className="text-[12px] ">
            This option caters to individuals who may not require frequent
            charging services or prefer a pay-as-you-go approach.
          </div>
        </div>
      </div>
    </Container>
  );
}
