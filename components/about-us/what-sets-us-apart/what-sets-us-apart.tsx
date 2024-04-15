"use client";

import Container from "@/components/container";
import ImageSwitcher from "./image-switcher";
import { useState } from "react";
import Reason from "./reason";
import { uniqueTraits } from "@/data/unique-traits";
import FadeInRender from "@/components/fade-in-render";

export default function WhatSetsUsApart() {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  return (
    <Container className="bg-[#2A322F] text-white ">
      <div className="mb-10 text-4xl font-bold">What sets us apart</div>
      <div className="flex flex-col gap-6 md:items-center lg:flex-row">
        <div className="flex flex-[2] justify-end">
          <div className="w-full md:w-[90%]">
            <Reason
              name={uniqueTraits[indicatorIndex].name}
              summary={uniqueTraits[indicatorIndex].summary}
            />
          </div>
        </div>
        <div className="w-full flex-[3] max-lg:mt-8">
          <ImageSwitcher
            indicatorIndex={indicatorIndex}
            setIndicatorIndex={setIndicatorIndex}
          />
        </div>
      </div>
    </Container>
  );
}
