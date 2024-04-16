import chargeImg from "@/public/images/about-charge.png";
import bootImg from "@/public/images/boot.png";
import customerImg from "@/public/images/customer.png";
import driverImg from "@/public/images/driver.png";
import pluggedInImg from "@/public/images/plugged-in.png";
import Image from "next/image";
import Container from "../container";
import StackedImages from "../stacked-images";

export default function OurMission() {
  return (
    <Container className="bg-white text-black ">
      <div className="mb-16 flex items-center justify-center">
        <Image src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div
              className={`text-[#00A63D] mb-8 text-center text-lg font-bold`}
            >
              Our Mission
            </div>
            <div className="text-center text-4xl  font-bold">
              Your Charge, Your way: Anytime, Anywhere you want it
            </div>
            <div className="mb-20 mt-10 text-center  text-lg ">
              At Charge Me Now, we&apos;re committed to creating a sustainable
              and convenient charging infrastructure for electric vehicles,
              empowering individuals to adopt cleaner transportation options and
              contributing to the global shift towards a greener future.
            </div>
          </div>
        </div>
        <StackedImages>
          <Image
            className="h-full rounded-md md:rounded-xl"
            src={pluggedInImg}
            alt="charger"
          />
          <Image
            className="h-full rounded-md md:rounded-xl"
            src={driverImg}
            alt="a happy man"
          />
          <Image
            className="h-full rounded-md md:rounded-xl"
            src={bootImg}
            alt="a car trunk"
          />
          <Image
            className="h-full rounded-md md:rounded-xl"
            src={customerImg}
            alt="a man with his phone"
          />
        </StackedImages>
      </div>
    </Container>
  );
}
