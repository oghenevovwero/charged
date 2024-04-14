"use client";

import Container from "@/components/container";
import ImageSwitcher from "./image-switcher";
import { useState } from "react";
import Reason from "./reason";
import { uniqueTraits } from "@/data/unique-traits";

export default function WhatSetsUsApart() {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  return (
    <Container className="bg-[#2A322F] text-white ">
      <div className="text-4xl mb-10 font-bold">What sets us apart</div>
      <div className="flex flex-col md:items-center lg:flex-row gap-6">
        <div className="flex-[2] flex justify-end">
          <div className="w-full md:w-[90%]">
          <Reason
            name={uniqueTraits[indicatorIndex].name}
            summary={uniqueTraits[indicatorIndex].summary}
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
