"use client";

import greenEarthImg from "@/public/green-earth.png";
import plugImg from "@/public/refuel.jpeg";
import trailerImg from "@/public/trailer.png";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import SwitcherButtons from "./switcher-btns";
import FadeInRender from "../../fade-in-render";

type Props = {
  setIndicatorIndex: Dispatch<SetStateAction<number>>;
  indicatorIndex: number;
};

export default function ImageSwitcher({indicatorIndex, setIndicatorIndex}: Props) {
  return (
    <div className="w-full">
      <div className="flex items-end gap-6 justify-between w-full h-[350px] md:h-[400px] lg:h-[500px]">
        <div className="flex justify-between w-full items-center h-full gap-2 sm:gap-5 lg:gap-5">
          <div className="hidden sm:block lg:hidden min-[1500px]:block h-full">
            <SwitcherButtons
              setIndicatorIndex={setIndicatorIndex}
              indicatorIndex={indicatorIndex}
            />
          </div>
          <div className="h-full flex items-end w-full sm:pr-5 lg:pr-2 xl:pr-5">
            <div className="w-full h-[80%]">
            {indicatorIndex === 1 && (
                <FadeInRender>
                  <Image
                    style={{ transition: "all 1s linear" }}
                    className="rounded-lg h-full w-full"
                    src={trailerImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 2 && (
                <FadeInRender>
                  <Image
                    className="rounded-lg h-full w-full"
                    src={greenEarthImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}              
              {indicatorIndex === 3 && (
                <FadeInRender>
                  <Image
                    style={{ transition: "all 1s linear" }}
                    className="rounded-lg h-full w-full"
                    src={plugImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
            </div>
          </div>
          <div className="w-[40%] flex h-full items-start  relative overflow-clip">
            <div className="w-[200%] h-[80%] absolute">              
              {indicatorIndex === 1 && (
                <FadeInRender>
                  <Image
                    className="rounded-lg h-full w-full"
                    quality={50}
                    placeholder="blur"
                    src={greenEarthImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 2 && (
                <FadeInRender>
                  <Image
                    className="rounded-lg h-full w-full"
                    quality={50}
                    src={plugImg}
                    placeholder="blur"
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 3 && (
                <FadeInRender>
                  <Image
                    className="rounded-lg h-full w-full"
                    src={trailerImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="sm:hidden lg:block min-[1500px]:hidden h-full">
          <SwitcherButtons setIndicatorIndex={setIndicatorIndex} indicatorIndex={indicatorIndex} />
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-1 items-center" key={0}>
            <div className="h-[6px] w-36 bg-gray-500 rounded-full flex items-center">
              <div
                style={{ width: `${(indicatorIndex / 3) * 100}%`, transition: "all 0.2s linear" }}
                className="h-full bg-gray-100 rounded-full"
              />
            </div>
            <div className="font-bold text-sm">{indicatorIndex}/3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
