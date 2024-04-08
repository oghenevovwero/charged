import welcomeImg from "@/public/work-setup.png";
import Image from "next/image";

export default function BuildWithUs() {
  return (
    <div className="flex flex-col items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32 xl:px-44">
      <div className="flex-1 px-2 lg:px-12">
        <div className="text-5xl font-medium md:font-bold">Building a Team with Us</div>
        <div className="my-10">
          Every innovative step forward and great milestone has a committed team behind it. Since
          our workers are the main reason for our success, we want to provide a vibrant, welcoming
          environment where everyone can develop and thrive.
        </div>
      </div>
      <div className="flex-1">
        <Image className="rounded-md" src={welcomeImg} alt="take the journey with us" />
      </div>
    </div>
  );
}
