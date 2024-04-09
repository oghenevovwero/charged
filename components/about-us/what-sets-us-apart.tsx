import Image from "next/image";
import arrowImg from "@/public/arrow-forward.svg";
import trailerImg from "@/public/trailer.png";
import trailerLogoImg from "@/public/s-logo.png";
import Container from "../container";

export default function WhatSetsUsApart() {
  return (
    <Container className="bg-[#2A322F] text-white  ">
      <div className="text-5xl font-medium mb-10 md:font-bold">What sets us apart</div>
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="flex-1 sm:pl-16 md:pl-20 lg:pl-24">
          <div className="text-4xl font-medium md:font-bold my-10">On-Demand convenience</div>
          <div>
            At Charge Me Now, we are on a mission to revolutionize the way people charge their
            electric vehicles, making sustainable and convenient energy accessible to everyone,
            anywhere. Our journey began with a vision to create a greener tomorrow, powered by
            cutting-edge technology and a passion for environmental responsibility.
          </div>
        </div>
        <div className="relative flex-1 flex justify-end">
          <div>
            <Image
              className="rounded-lg aspect-square relative inset-0"
              src={trailerImg}
              alt="a member of a charging fleet"
            />
            <Image
              width={86}
              height={86}
              quality={100}
              alt="charge vehicle"
              className="absolute right-[125px] top-[120px]"
              src={trailerLogoImg}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-14 md:mt-28">
        <div className="flex items-center gap-6 md:gap-12">
          <div className="h-11 w-11 cursor-pointer active:opacity-50 rotate-180 rounded-full bg-gray-100 flex justify-center items-center">
            <Image src={arrowImg} width={25} height={10} alt="next" />
          </div>
          <div className="flex gap-1">
            <div className="h-1 w-6 rounded-full bg-gray-100" />
            <div className="h-1 w-6 rounded-full bg-gray-700" />
            <div className="h-1 w-6 rounded-full bg-gray-700" />
          </div>
          <div className="h-11 w-11 cursor-pointer active:opacity-50 rounded-full bg-gray-100 flex justify-center items-center">
            <Image src={arrowImg} width={25} height={10} alt="previous" />
          </div>
        </div>
      </div>
    </Container>
  );
}
