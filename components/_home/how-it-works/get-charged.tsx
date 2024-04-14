import Image from "next/image";
import chargedImg from "@/public/bat.png";
import Padding from "@/components/padding";

export default function GetCharged() {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:pl-16">
      <Image
        src={chargedImg}
        quality={100}
        width={75}
        height={75}
        alt={"Download our app"}
      />
      <div className="mb-4 mt-8 text-2xl font-semibold">Get charged</div>
      <div className="">
        Our truck arrives on time and powers up your vehicle as per requirement.
      </div>
    </div>
  );
}
