import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/plugged-in.png";
import driverImg from "@/public/driver.png";
import bootImg from "@/public/boot.png";
import customerImg from "@/public/customer.png";

export default function OurMission() {
  return (
    <div className="text-black bg-white py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="flex justify-center items-center mt-10 mb-20 md:my-20 px-2">
        <Image src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <div className="text-[#00A63D] text-center mb-8 text-3xl font-bold">Our Mission</div>
        <div className="text-4xl md:text-4xl text-center px-2 sm:px-8 md:px-16 lg:px-32 xl:px-72 font-medium md:font-bold">
          Your Charge, Your way: Anytime, Anywhere you want it
        </div>
        <div className="mt-10 mb-20 text-center px-2 sm:px-8 md:px-16 lg:px-32 xl:px-72 text-lg font-light">
          At Charge Me Now, we&apos;re committed to creating a sustainable and convenient charging
          infrastructure for electric vehicles, empowering individuals to adopt cleaner
          transportation options and contributing to the global shift towards a greener future.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-center lg:px-10 xl:px-20">
          <div>
            <Image className="rounded-md md:rounded-xl" src={pluggedInImg} alt="plugged in" />
          </div>
          <div className="md:h-[450px] md:flex md:flex-col">
            <Image className="rounded-md md:rounded-xl" src={driverImg} alt="a satisfied driver" />
          </div>
          <div className="md:h-[400px] md:flex md:flex-col">
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
    </div>
  );
}
