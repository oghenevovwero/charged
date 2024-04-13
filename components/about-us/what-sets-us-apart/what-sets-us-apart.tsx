"use client";

import Container from "@/components/container";
import ImageSwitcher from "./image-switcher";
import { useState } from "react";
import Reason from "./reason";

export default function WhatSetsUsApart() {
  const [indicatorIndex, setIndicatorIndex] = useState(1);
  return (
    <Container className="bg-[#2A322F] text-white ">
      <div className="text-4xl mb-10 font-bold">What sets us apart</div>
      <div className="flex flex-col md:items-center lg:flex-row gap-6">
        <div className="flex-[2] flex justify-end">
          <div className="w-full md:w-[90%]">
          <Reason
            name={reasons[indicatorIndex - 1].name}
            summary={reasons[indicatorIndex - 1].summary}
          />
          </div>
        </div>
        <div className="flex-[3] w-full max-lg:mt-8">
          <ImageSwitcher indicatorIndex={indicatorIndex} setIndicatorIndex={setIndicatorIndex} />
        </div>
      </div>
    </Container>
  );
}

const reasons: Array<{ name: string; summary: string }> = [
  {
    name: "On-Demand convenience",
    summary: `
  At Charge Me Now, we are on a mission to revolutionize the way people charge their
  electric vehicles, making sustainable and convenient energy accessible to everyone,
  anywhere. Our journey began with a vision to create a greener tomorrow, powered by
  cutting edge technology and a passion for environmental responsibility.`,
  },
  {
    name: "Environmental stewardship",
    summary: `
  Sustainability is at the core of our 
  values. By choosing Charge Me Now, you arr not just charging your vehicle; you are contributing
  to a cleaner and greener world. 
  Our commitment to reducing carbon footprints drives every aspect of our business.`,
  },
  {
    name: "Innovation in motion",
    summary: `
 We embrace the latest advancements in charging technology. Our mobile 
 charging units are equipped with start-of-the-art feature
 ensuring fast, reliable, and efficient charging for your electric vehicle.`,
  },
];
