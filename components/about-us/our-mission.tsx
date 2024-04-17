import chargeImg from "@/public/images/about-charge-c.png";
import bootImg from "@/public/images/boot-c.png";
import customerImg from "@/public/images/customer-c.png";
import driverImg from "@/public/images/driver-c.png";
import pluggedInImg from "@/public/images/plugged-in-c.png";
import ExportedImage from "next-image-export-optimizer";
import Container from "../container";
import StackedImages from "../stacked-images";

export default function OurMission() {
  return (
    <Container className="bg-white text-black ">
      <div className="mb-16 flex items-center justify-center">
        <ExportedImage src={chargeImg} alt="charge with us" />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div
              className={`text-[#00A54D] mb-8 text-center text-lg font-bold`}
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
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={pluggedInImg}
            alt="charger"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={driverImg}
            alt="a happy man"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={bootImg}
            alt="a car trunk"
          />
          <ExportedImage
            className="h-full rounded-md md:rounded-xl"
            src={customerImg}
            alt="a man with his phone"
          />
        </StackedImages>
      </div>
    </Container>
  );
}
