"use client";

import arrowImg from "@/public/images/arrow-forward.svg";
import ExportedImage from "next-image-export-optimizer";
import { Dispatch, SetStateAction } from "react";

type SwitcherProps = {
  setIndicatorIndex: Dispatch<SetStateAction<number>>;
  indicatorIndex: number;
};

export default function SwitcherButtons({
  setIndicatorIndex,
  indicatorIndex,
}: SwitcherProps) {
  return (
    <div className="flex h-full items-end gap-5 ">
      <div
        onClick={() => {
          setIndicatorIndex((prev) => {
            if (prev === 0) {
              return prev;
            }
            return prev - 1;
          });
        }}
        style={{ opacity: indicatorIndex === 0 ? "40%" : "100%" }}
        className="flex h-11 w-11 rotate-180 cursor-pointer items-center justify-center rounded-full bg-gray-100 active:bg-gray-500"
      >
        <ExportedImage src={arrowImg} width={25} height={10} alt="next" />
      </div>

      <div
        onClick={() => {
          setIndicatorIndex((prev) => {
            if (prev === 2) {
              return prev;
            }
            return prev + 1;
          });
        }}
        style={{ opacity: indicatorIndex === 2 ? "40%" : "100%" }}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-100 active:bg-gray-500"
      >
        <ExportedImage src={arrowImg} width={25} height={10} alt="previous" />
      </div>
    </div>
  );
}
