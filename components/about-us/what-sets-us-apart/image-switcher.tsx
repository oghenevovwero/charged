"use client";

import greenEarthImg from "@/public/images/green-earth.png";
import plugImg from "@/public/images/refuel.jpeg";
import trailerImg from "@/public/images/trailer.png";
import ExportedImage from "next-image-export-optimizer";
import { Dispatch, SetStateAction, useState } from "react";
import SwitcherButtons from "./switcher-btns";
import FadeInRender from "../../fade-in-render";
import ImageIndicator from "./indicator";

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
                  <ExportedImage
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
                  <ExportedImage
                    className="h-full w-full rounded-lg"
                    src={greenEarthImg}
                    placeholder="blur"
                    alt="charging trailer"
                  />
                </FadeInRender>
              )}
              {indicatorIndex === 2 && (
                <FadeInRender>
                  <ExportedImage
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
                  <ExportedImage
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
                  <ExportedImage
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
                  <ExportedImage
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
        <ExportedImageIndicator indicatorIndex={indicatorIndex} />
      </div>
    </div>
  );
}
