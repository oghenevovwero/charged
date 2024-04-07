import Image from "next/image";

export default function WhatSetsUsApart() {
  return (
    <div className="bg-[#2A322F] text-white py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-32">
      <div className="text-4xl font-medium">What sets us apart</div>
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-1 px-2 sm:px-8 md:px-16 lg:px-32">
          <div className="text-3xl font-medium my-10">On-Demand convenience</div>
          <div>
            At Charge Me Now, we are on a mission to revolutionize the way people charge their
            electric vehicles, making sustainable and convenient energy accessible to everyone,
            anywhere. Our journey began with a vision to create a greener tomorrow, powered by
            cutting-edge technology and a passion for environmental responsibility.
          </div>
        </div>
        <div className="flex-1 relative">
          <img className="rounded-lg" src="/trailer.png" />
          {/* <Image
            width={55}
            height={55}
            alt="charge vehicle"
            className="absolute top-[135px] left-[160px]"
            src="/s-logo.png"
          /> */}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-14 md:mt-28">
        <div className="flex items-center gap-5">
          <div className="h-11 w-11 cursor-pointer active:opacity-50 rotate-180 rounded-full bg-gray-100 flex justify-center items-center">
            <Image src={"/arrow-forward.svg"} width={25} height={10} alt="next" />
          </div>
          <div className="flex gap-1">
            <div className="h-1 w-6 rounded-full bg-gray-100" />
            <div className="h-1 w-6 rounded-full bg-gray-700" />
            <div className="h-1 w-6 rounded-full bg-gray-700" />
          </div>
          <div className="h-11 w-11 cursor-pointer active:opacity-50 rounded-full bg-gray-100 flex justify-center items-center">
            <Image src={"/arrow-forward.svg"} width={25} height={10} alt="previous" />
          </div>
        </div>
      </div>
    </div>
  );
}
