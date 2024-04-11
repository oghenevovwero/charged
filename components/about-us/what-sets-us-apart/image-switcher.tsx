"use client";

import Image from "next/image";
import arrowImg from "@/public/arrow-forward.svg";
import trailerImg from "@/public/trailer.png";
import greenEarthImg from "@/public/green-earth.png";
import plugImg from "@/public/plugged-in.png";
import { useState } from "react";
import Padding from "@/components/padding";

export default function ImageSwitcher() {
  const [indicatorIndex, setIndicatorIndex] = useState(1);

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="w-full h-[400px] aspect-square">
        {indicatorIndex === 1 && (
          <Image className="rounded-lg aspect-square h-full w-full" src={greenEarthImg} alt="charging trailer" />
        )}
        {indicatorIndex === 2 && (
          <Image className="rounded-lg aspect-square h-full w-full" src={plugImg} alt="charging trailer" />
        )}
        {indicatorIndex === 3 && (
          <Image className="rounded-lg aspect-square h-full w-full" src={trailerImg} alt="charging trailer" />
        )}
      </div>
      <div className="flex justify-between mt-10 gap-5">
        <div className="flex-1 flex gap-6">
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
        <div className="flex-[2] flex justify-end">
          <div className="w-[75%] flex gap-1 items-center" key={0}>
            <div className="h-[6px] w-full bg-gray-500 rounded-full flex items-center">
              <div
                style={{ width: `${(indicatorIndex / 3) * 100}%`, transition: "all 0.2s linear" }}
                className="h-1 bg-gray-100 rounded-full"
              />
            </div>
            <div className="font-bold text-sm">{indicatorIndex}/3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
