import bootImg from "@/public/happy-driver.png";
import customerImg from "@/public/man-in-suit.png";
import pluggedInImg from "@/public/mechanic.png";
import driverImg from "@/public/young-lady.png";
import Image from "next/image";
import BtnLink from "../btn-link";
import Container from "../container";
import StackedImages from "../stacked-images";

export default function Availability() {
  return (
    <Container className="text-black bg-white ">
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="text-4xl md:text-4xl text-center  font-bold">
              Guaranteed availability of swift and potent EV charging whenever
              needed
            </div>
            <div className="mt-6 mb-16 text-center  text-lg">
              We provide a variety of engaging employment options in areas
              including engineering, marketing, sales, and mobile operations,
              among others.
            </div>
          </div>
        </div>
        <StackedImages>
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={pluggedInImg}
            alt="mechanic"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={driverImg}
            alt="girl with laptop"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={bootImg}
            alt="happy driver"
          />
          <Image
            className="rounded-md md:rounded-xl h-full"
            src={customerImg}
            alt="an accountant"
          />
        </StackedImages>
        <div className="w-full flex justify-start sm:justify-center items-center mt-6 md:mt-12">
          <BtnLink to="roles" title="View open roles" />
        </div>
      </div>
    </Container>
  );
}
