import Container from "@/components/about-us/container";
import Plan from "./plan";
import Image from "next/image";
import greenTickImg from "@/public/green-tick.png";

export default function Plans() {
  return (
    <Container className="bg-white text-black">
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-10 mb-12">
        {plans.map((plan) => (
          <Plan key={plan.plan} {...plan} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-2 lg:gap-4 shadow-lg p-2 md:p-3 lg:p-5">
        <div className="flex-[2]">
          <div className="font-bold mb-5 text-2xl">Roadside Assistance</div>
          <div className="font-light">
            Additionally, we offer a standalone roadside assistance plan aimed at providing peace of
            mind to EV owners
          </div>
        </div>

        <div className="flex-[3] w-full flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-4">
          <div className="flex items-end gap-1">
            <div className="font-extrabold text-5xl">$20</div>
            <div>/</div>
            <div className="text-[11px] font-light align-sub">Month</div>
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
          <button className="border bg-white rounded-lg w-full p-2 font-medium text-lg border-[#00A63D]">
            Get started
          </button>
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
