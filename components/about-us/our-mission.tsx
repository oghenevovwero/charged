import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/plugged-in.png";
import driverImg from "@/public/driver.png";
import bootImg from "@/public/boot.png";
import customerImg from "@/public/customer.png";
import Container from "./container";
import Padding from "../padding";

export default function OurMission() {
  return (
    <Container className="text-black bg-white ">
      <div className="flex justify-center items-center mt-10 mb-20 md:my-20">
        <Image src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <Padding className="">
          <div className="text-[#00A63D] text-center mb-8 text-3xl font-bold">Our Mission</div>
          <div className="text-4xl md:text-4xl text-center  font-bold">
            Your Charge, Your way: Anytime, Anywhere you want it
          </div>
          <div className="mt-10 mb-20 text-center  md:text-lg font-light">
            At Charge Me Now, we&apos;re committed to creating a sustainable and convenient charging
            infrastructure for electric vehicles, empowering individuals to adopt cleaner
            transportation options and contributing to the global shift towards a greener future.
          </div>
        </Padding>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-center">
          <div>
            <Image className="rounded-md md:rounded-xl" src={pluggedInImg} alt="plugged in" />
          </div>
          <div className="md:h-[400px] lg:h-[450px] xl:h-[500px]  md:flex md:flex-col">
            <Image className="rounded-md md:rounded-xl" src={driverImg} alt="a satisfied driver" />
          </div>
          <div className="md:h-[350px] lg:h-[400px] xl:h-[450px] md:flex md:flex-col">
            <Image className="rounded-md md:rounded-xl" src={bootImg} alt="" />
          </div>
          <div>
            <Image
              className="rounded-md md:rounded-xl"
              src={customerImg}
              alt="a satisfied customer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
