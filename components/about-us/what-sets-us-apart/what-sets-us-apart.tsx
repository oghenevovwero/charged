import Container from "@/components/container";
import ImageSwitcher from "./image-switcher";

export default function WhatSetsUsApart() {
  return (
    <Container className="bg-[#2A322F] text-white ">
      <div className="text-4xl mb-10 font-bold">What sets us apart</div>
      <div className="flex flex-col md:items-center lg:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-center pl-4 lg:pl-12 xl:pl-24">
          <div className="text-3xl font-bold mb-6 md:mb-8">On-Demand convenience</div>
          <div className="text-lg">
            At Charge Me Now, we are on a mission to revolutionize the way people charge their
            electric vehicles, making sustainable and convenient energy accessible to everyone,
            anywhere. Our journey began with a vision to create a greener tomorrow, powered by
            cutting-edge technology and a passion for environmental responsibility.
          </div>
        </div>
        <div className="flex-1 w-full max-lg:mt-10">
          <ImageSwitcher />
        </div>
      </div>
    </Container>
  );
}
