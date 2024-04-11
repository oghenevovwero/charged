"use client";

import arrowImg from "@/public/arrow-forward.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type SwitcherProps = {
  setIndicatorIndex: Dispatch<SetStateAction<number>>;
  indicatorIndex: number;
};

export default function SwitcherButtons({ setIndicatorIndex, indicatorIndex }: SwitcherProps) {
  return (
    <div className="flex h-full gap-5 items-end ">
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
        className="h-11 w-11 cursor-pointer active:bg-gray-500 rotate-180 rounded-full bg-gray-100 flex justify-center items-center"
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
        className="h-11 w-11 cursor-pointer active:bg-gray-500 rounded-full bg-gray-100 flex justify-center items-center"
      >
        <Image src={arrowImg} width={25} height={10} alt="previous" />
      </div>
    </div>
  );
}
