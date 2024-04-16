import bootImg from "@/public/images/happy-driver.png";
import customerImg from "@/public/images/man-in-suit.png";
import pluggedInImg from "@/public/images/mechanic.png";
import driverImg from "@/public/images/young-lady.png";
import ExportedImage from "next-image-export-optimizer";
import BtnLink from "../btn-link";
import Container from "../container";
import StackedImages from "../stacked-images";

export default function Availability() {
  return (
    <Container className="bg-white text-black ">
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="text-center text-4xl font-bold  md:text-4xl">
              Guaranteed availability of swift and potent EV charging whenever
              needed
            </div>
            <div className="mb-16 mt-6 text-center  text-lg">
              We provide a variety of engaging employment options in areas
              including engineering, marketing, sales, and mobile operations,
              among others.
            </div>
          </div>
        </div>
        <StackedImages>
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={pluggedInImg}
            alt="mechanic"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={driverImg}
            alt="girl with laptop"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={bootImg}
            alt="happy driver"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={customerImg}
            alt="an accountant"
          />
        </StackedImages>
        <div className="flex w-full items-center justify-start sm:justify-center mt:10 md:mt-20">
          <BtnLink to="roles" title="View open roles" />
        </div>
      </div>
    </Container>
  );
}
