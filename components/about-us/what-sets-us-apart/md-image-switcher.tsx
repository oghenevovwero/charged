"use client";

import Image from "next/image";
import arrowImg from "@/public/arrow-forward.svg";
import trailerImg from "@/public/trailer.png";
import greenEarthImg from "@/public/green-earth.png";
import plugImg from "@/public/plugged-in.png";
import { useState } from "react";

export default function MdImageSwitcher() {
  const [indicatorIndex, setIndicatorIndex] = useState(1);

  return (
    <div className="w-full">
      <div className="flex items-end gap-6 justify-between w-full h-[450px]">
        <div className="flex justify-between w-full items-center h-full gap-3">
          <div className="flex h-full gap-2 xl:gap-3 items-end ">
            <div
              onClick={() => {
                setIndicatorIndex((prev) => {
                  if (prev === 1) {
                    return prev;
                  }
                  return prev - 1;
                });
              }}
              style={{ opacity: indicatorIndex === 1 ? "50%" : "100%" }}
              className="h-11 w-11 cursor-pointer active:opacity-50 rotate-180 rounded-full bg-gray-100 flex justify-center items-center"
            >
              <Image src={arrowImg} width={25} height={10} alt="next" />
            </div>

            <div
              onClick={() => {
                setIndicatorIndex((prev) => {
                  if (prev === 3) {
                    return prev;
                  }
                  return prev + 1;
                });
              }}
              style={{ opacity: indicatorIndex === 3 ? "50%" : "100%" }}
              className="h-11 w-11 cursor-pointer active:opacity-50 rounded-full bg-gray-100 flex justify-center items-center"
            >
              <Image src={arrowImg} width={25} height={10} alt="previous" />
            </div>
          </div>
          <div className="h-full flex items-end w-full lg:pr-3">
            <div className="w-full h-[80%]">
              {indicatorIndex === 1 && (
                <Image
                  className="rounded-lg h-full w-full"
                  src={trailerImg}
                  alt="charging trailer"
                />
              )}
              {indicatorIndex === 2 && (
                <Image
                  className="rounded-lg h-full w-full"
                  src={greenEarthImg}
                  alt="charging trailer"
                />
              )}
              {indicatorIndex === 3 && (
                <Image className="rounded-lg h-full w-full" src={plugImg} alt="charging trailer" />
              )}
            </div>
          </div>
          <div className="w-[50%] flex h-full items-start  relative overflow-clip">
            <div className="w-[200%] h-[80%] absolute">
              {indicatorIndex === 1 && (
                <Image
                  className="rounded-lg h-full w-full"
                  quality={50}
                  src={greenEarthImg}
                  placeholder="blur"
                  alt="charging trailer"
                />
              )}
              {indicatorIndex === 2 && (
                <Image
                  className="rounded-lg h-full w-full"
                  quality={50}
                  placeholder="blur"
                  src={plugImg}
                  alt="charging trailer"
                />
              )}
              {indicatorIndex === 3 && (
                <Image
                  className="rounded-lg h-full w-full"
                  quality={50}
                  placeholder="blur"
                  src={trailerImg}
                  alt="charging trailer"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end mt-6">
        <div className="flex gap-1 items-center" key={0}>
          <div className="h-[7px] w-36 bg-gray-500 rounded-full flex items-center">
            <div
              style={{ width: `${(indicatorIndex / 3) * 100}%`, transition: "all 0.2s linear" }}
              className="h-full bg-gray-100 rounded-full"
            />
          </div>
          <div className="font-bold text-sm">{indicatorIndex}/3</div>
        </div>
      </div>
    </div>
  );
}
