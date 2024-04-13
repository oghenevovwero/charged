import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/plugged-in.png";
import driverImg from "@/public/driver.png";
import bootImg from "@/public/boot.png";
import customerImg from "@/public/customer.png";
import Container from "../container";

export default function OurMission() {
  return (
    <Container className="text-black bg-white ">
      <div className="flex justify-center items-center mb-16">
        <Image src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className={`text-[${process.env.primaryGreen}] text-center mb-8 text-lg font-bold`}>Our Mission</div>
            <div className="text-4xl text-center  font-bold">
              Your Charge, Your way: Anytime, Anywhere you want it
            </div>
            <div className="mt-10 mb-20 text-center  text-lg ">
              At Charge Me Now, we&apos;re committed to creating a sustainable and convenient
              charging infrastructure for electric vehicles, empowering individuals to adopt cleaner
              transportation options and contributing to the global shift towards a greener future.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-end">
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
