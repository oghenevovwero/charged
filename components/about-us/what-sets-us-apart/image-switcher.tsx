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

export default function ImageSwitcher({
  indicatorIndex,
  setIndicatorIndex,
}: Props) {
  return (
    <div className="w-full">
      <div className="flex h-[350px] w-full items-end justify-between gap-6 md:h-[400px]">
        <div className="flex h-full w-full items-center justify-between gap-2 sm:gap-5 lg:gap-5">
          <div className="hidden h-full sm:block lg:hidden xl:block min-[1500px]:block">
            <SwitcherButtons
              setIndicatorIndex={setIndicatorIndex}
              indicatorIndex={indicatorIndex}
            />
          </div>
          <div className="flex h-full w-full items-end justify-center">
            <div className="h-[85%] max-w-[300px] xl:max-w-[320px]">
              {indicatorIndex === 0 && (
                <FadeInRender>
                  <Image
                    style={{ transition: "all 1s linear" }}
                    className="h-full w-full rounded-lg"
                    placeholder="blur"
                    src={trailerImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 1 && (
                <FadeInRender>
                  <Image
                    className="h-full w-full rounded-lg"
                    src={greenEarthImg}
                    placeholder="blur"
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 2 && (
                <FadeInRender>
                  <Image
                    style={{ transition: "all 1s linear" }}
                    className="h-full w-full rounded-lg"
                    placeholder="blur"
                    src={plugImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
            </div>
          </div>
          <div className="relative flex h-full w-[40%]  items-start overflow-clip">
            <div className="absolute h-[80%] w-[200%]">
              {indicatorIndex === 0 && (
                <FadeInRender>
                  <Image
                    className="h-full w-full rounded-lg"
                    quality={50}
                    placeholder="blur"
                    src={greenEarthImg}
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 1 && (
                <FadeInRender>
                  <Image
                    className="h-full w-full rounded-lg"
                    quality={50}
                    src={plugImg}
                    placeholder="blur"
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 2 && (
                <FadeInRender>
                  <Image
                    className="h-full w-full rounded-lg"
                    src={trailerImg}
                    placeholder="blur"
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="h-full sm:hidden lg:block xl:hidden min-[1500px]:hidden">
          <SwitcherButtons
            setIndicatorIndex={setIndicatorIndex}
            indicatorIndex={indicatorIndex}
          />
        </div>
        <div className="flex w-full justify-end">
          <div className="flex items-center gap-1" key={0}>
            <div className="flex h-[6px] w-36 items-center rounded-full bg-gray-500">
              <div
                style={{
                  width: `${(indicatorIndex / 3) * 100}%`,
                  transition: "all 0.2s linear",
                }}
                className="h-full rounded-full bg-gray-100"
              />
            </div>
            <div className="text-sm font-bold">{indicatorIndex}/3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
