import Container from "@/components/container";
import Plan from "./plan";
import Image from "next/image";
import vanImg from "@/public/van.png";
import greenTickImg from "@/public/green-tick.png";

export default function Plans() {
  return (
    <Container className="bg-white text-black">
      <div className="flex flex-col sm:flex-row gap-10 md:gap-3 lg:gap-10 mb-12">
        {plans.map((plan) => (
          <Plan key={plan.plan} {...plan} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center  justify-around gap-10 mb-12 sm:gap-2 lg:gap-4 rounded-lg shadow-lg p-2 md:p-3 lg:p-5">
        <div className="flex-[2]">
          <div className="font-bold mb-5 text-2xl">Roadside Assistance</div>
          <div className="">
            Additionally, we offer a standalone roadside assistance plan aimed at providing peace of
            mind to EV owners
          </div>
        </div>

        <div className="flex-[4] w-full flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-4">
          <div className="flex items-end gap-1">
            <div className="font-extrabold text-5xl">$20</div>
            <div>/</div>
            <div className="text-[11px]  align-sub">Month</div>
          </div>

          <div className="">
            <div className="flex gap-2  mb-5 items-center">
              <div className="flex-[1]">
                <Image src={greenTickImg} width={25} height={25} alt="included in plan" />
              </div>
              <div className="text-sm font-bold flex-[10]">
                $0 for the first 10kWh during service calls.
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex-[1]">
                <Image src={greenTickImg} width={25} height={25} alt="included in plan" />
              </div>
              <div className="text-sm font-bold flex-[10]">
                $0 for the first 10kWh during service calls.
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <button className="border bg-white cursor-pointer active:opacity-50 rounded-lg w-full p-2 font-medium text-lg border-[#00A63D]">
            Get started
          </button>
        </div>
      </div>

      <div className="shadow-lg px-2 py-5 md:p-3 lg:p-5 rounded-lg relative min-[1110px]:h-[400px]">
        <div className="font-bold lg:w-[70%] ">
          We also do One-Time Service Call, For non-subscribers or customers who require occasional
          assistance, we offer one-time service call requests
        </div>
        <div className="max-lg:my-10">
          <Image src={vanImg} alt="van" className="min-[1110px]:float-end" />
        </div>

        <div className="h-full flex flex-col justify-around min-[1110px]:py-20">
        <div className="flex items-end gap-1 max-[1110px]:my-10">
          <div className="font-extrabold text-5xl">$20</div>
          <div className="align-sub font-bold">for up to 10 kWh</div>
        </div>
        <div className="text-[11px] font-bold max-[1110px]:mb-6">
          *Additional Charge: $10 for every extra 10 kWh
        </div>
        <div className="text-[11px] ">
          This option caters to individuals who may not require frequent charging services or prefer
          a pay-as-you-go approach.
        </div>
        </div>
      </div>
    </Container>
  );
}

const plans: Array<{
  plan: string;
  duration: string;
  features: string[];
  recommended: boolean;
  cost: string;
}> = [
  {
    plan: "Basic",
    cost: "10",
    duration: "Month",
    features: [
      "$0.62 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: false,
  },
  {
    plan: "Premium",
    cost: "15",
    duration: "Month",
    features: [
      "$0.58 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: true,
  },
  {
    plan: "Explorer",
    cost: "30",
    duration: "Month",
    features: [
      "$0.50 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: false,
  },
];
