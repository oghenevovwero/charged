"use client";

import Image from "next/image";
import arrowImg from "@/public/arrow-forward.svg";
import trailerImg from "@/public/trailer.png";
import Container from "../container";
import { useState } from "react";

export default function WhatSetsUsApart() {
  const indicators = [
    <div className="flex gap-1 items-center" key={0}>
      <div className="h-1 w-36 bg-gray-500 rounded-full flex items-center">
        <div className="h-1 w-1/3 bg-gray-100 rounded-full" />
      </div>
      <div className="font-bold text-sm">1/3</div>
    </div>,
    <div className="flex gap-1 items-center" key={1}>
      <div className="h-1 w-36 bg-gray-500 rounded-full flex items-center">
        <div className="h-1 w-2/3 bg-gray-100 rounded-full" />
      </div>
      <div className="font-bold text-sm">2/3</div>
    </div>,
    <div className="flex gap-1 items-center" key={2}>
      <div className="h-1 w-36 bg-gray-500 rounded-full flex items-center">
        <div className="h-1 w-full bg-gray-100 rounded-full" />
      </div>
      <div className="font-bold text-sm">3/3</div>
    </div>,
  ];

  const [indicatorIndex, setIndicatorIndex] = useState(0);

  return (
    <Container className="bg-[#2A322F] text-white  ">
      <div className="text-4xl mb-10 md:mb-20 font-bold">What sets us apart</div>
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-center sm:pl-16 md:pl-20 lg:pl-24">
          <div className="text-3xl font-bold mb-6 md:mb-8">On-Demand convenience</div>
          <div>
            At Charge Me Now, we are on a mission to revolutionize the way people charge their
            electric vehicles, making sustainable and convenient energy accessible to everyone,
            anywhere. Our journey began with a vision to create a greener tomorrow, powered by
            cutting-edge technology and a passion for environmental responsibility.
          </div>
        </div>
        <div className="flex-1 flex flex-col-reverse lg:flex-row justify-center lg:justify-end gap-6">
          <div className="flex items-end gap-6">
            <div onClick={() => {
              setIndicatorIndex(prev => {
                if(prev === 0){
                  return prev
                }
                return prev - 1
              })
            }} 
            style={{opacity: indicatorIndex === 0 ? "50%" : "100%"}}
            className="h-11 w-11 cursor-pointer active:opacity-50 rotate-180 rounded-full bg-gray-100 flex justify-center items-center">
              <Image src={arrowImg} width={25} height={10} alt="next" />
            </div>

            <div onClick={() => {
              setIndicatorIndex(prev => {
                if(prev === 2){
                  return prev
                }
                return prev + 1
              })
            }}
            style={{opacity: indicatorIndex === 2 ? "50%" : "100%"}}
            className="h-11 w-11 cursor-pointer active:opacity-50 rounded-full bg-gray-100 flex justify-center items-center">
              <Image src={arrowImg} width={25} height={10} alt="previous" />
            </div>
          </div>
          <Image className="rounded-lg" src={trailerImg} alt="charging trailer" />
        </div>
      </div>
      <div className="mt-10 flex justify-end">{indicators.at(indicatorIndex)}</div>
    </Container>
  );
}
