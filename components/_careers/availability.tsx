import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/mechanic.png";
import driverImg from "@/public/young-lady.png";
import bootImg from "@/public/happy-driver.png";
import customerImg from "@/public/man-in-suit.png";
import Link from "next/link";
import Container from "../container";
import Padding from "../padding";

export default function Availability() {
  return (
    <Container className="text-black bg-white ">
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="text-4xl md:text-4xl text-center  font-bold">
              Guaranteed availability of swift and potent EV charging whenever needed
            </div>
            <div className="mt-6 mb-16 text-center  text-lg">
              We provide a variety of engaging employment options in areas including engineering,
              marketing, sales, and mobile operations, among others.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-end">
          <div>
            <Image className="rounded-md md:rounded-xl" src={pluggedInImg} alt="plugged in" />
          </div>
          <div className="md:h-[400px] lg:h-[4500px] xl:h-[500px]  md:flex md:flex-col">
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
        <div className="w-full flex justify-start sm:justify-center items-center">
          <Link href={"/roles"} className="mt-6 md:mt-12 bg-[#00A63D] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-[33px] py-[14px] rounded-lg text-lg ">
            View open roles
          </Link>
        </div>
      </div>
    </Container>
  );
}
