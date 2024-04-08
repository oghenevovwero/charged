import Image from "next/image";
import chargeImg from "@/public/about-charge.png";
import pluggedInImg from "@/public/mechanic.png";
import driverImg from "@/public/young-lady.png";
import bootImg from "@/public/happy-driver.png";
import customerImg from "@/public/man-in-suit.png";
import Link from "next/link";
import Container from "../about-us/container";
import Padding from "../padding";

export default function Availability() {
  return (
    <Container className="text-black bg-white ">
      <div>
        <Padding>
          <div className="text-4xl md:text-4xl text-center  font-bold">
            Guaranteed availability of swift and potent EV charging whenever needed
          </div>
          <div className="mt-10 mb-20 text-center  md:text-lg font-light">
            We provide a variety of engaging employment options in areas including engineering,
            marketing, sales, and mobile operations, among others.
          </div>
        </Padding>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-center">
          <div>
            <Image className="rounded-md md:rounded-xl" src={pluggedInImg} alt="plugged in" />
          </div>
          <div className="md:h-[400px] lg:h-[450px] xl:h-[500px] md:flex md:flex-col">
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
        <div className="w-full flex justify-center mt-10">
          <Link
            href={"/roles"}
            className="bg-[#00A63D] font-medium cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-2 rounded-md"
          >
            View open roles
          </Link>
        </div>
      </div>
    </Container>
  );
}
