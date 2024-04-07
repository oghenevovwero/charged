import welcomeImg from "@/public/road.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="flex flex-col md:items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32 xl:px-44">
      <div className="flex-1 px-2 sm:px-8 md:px-16 lg:px-24">
        <div className="text-4xl font-medium md:font-bold">
          Welcome to Charge Me Now. We are pioneers in Mobile EV Charging
        </div>
        <div className="my-10">
          At Charge Me Now, we are on a mission to revolutionize the way people charge their
          electric vehicles, making sustainable and convenient energy accessible to everyone,
          anywhere. Our journey began with a vision to create a greener tomorrow, powered by
          cutting-edge technology and a passion for environmental responsibility.
        </div>
      </div>
      <div className="flex-1">
        <Image className="rounded-md" src={welcomeImg} alt="take the journey with us" />
      </div>
    </div>
  );
}
