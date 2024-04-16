import welcomeImg from "@/public/images/work-setup.png";
import Image from "next/image";
import Container from "../container";

export default function BuildWithUs() {
  return (
    <Container className="flex flex-col items-center bg-[#F6F8F7] text-black  md:flex-row  ">
      <div className="flex-1">
        <div className="text-4xl font-bold">Building a Team with Us</div>
        <div className="mb-10 mt-6 text-lg">
          Every innovative step forward and great milestone has a committed team
          behind it. Since our workers are the main reason for our success, we
          want to provide a vibrant, welcoming environment where everyone can
          develop and thrive.
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <Image
          className="rounded-md"
          src={welcomeImg}
          alt="take the journey with us"
        />
      </div>
    </Container>
  );
}
