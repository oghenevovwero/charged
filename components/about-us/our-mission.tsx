import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/plugged-in.png";
import driverImg from "@/public/driver.png";
import bootImg from "@/public/boot.png";
import customerImg from "@/public/customer.png";
import Container from "../container";
import StackedImages from "../stacked-images";

export default function OurMission() {
  return (
    <Container className="text-black bg-white ">
      <div className="flex justify-center items-center mb-16">
        <Image src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div
              className={`text-[${process.env.NEXT_PUBLIC_PG}] text-center mb-8 text-lg font-bold`}
            >
              Our Mission
            </div>
            <div className="text-4xl text-center  font-bold">
              Your Charge, Your way: Anytime, Anywhere you want it
            </div>
            <div className="mt-10 mb-20 text-center  text-lg ">
              At Charge Me Now, we&apos;re committed to creating a sustainable
              and convenient charging infrastructure for electric vehicles,
              empowering individuals to adopt cleaner transportation options and
              contributing to the global shift towards a greener future.
            </div>
          </div>
        </div>
        <StackedImages>
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={pluggedInImg}
            alt="charger"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={driverImg}
            alt="a happy man"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={bootImg}
            alt="a car trunk"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={customerImg}
            alt="a man with his phone"
          />
        </StackedImages>
      </div>
    </Container>
  );
}
