import Image from "next/image";
import chargedImg from "@/public/bat.png";
import Padding from "@/components/padding";

export default function GetCharged() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image src={chargedImg} quality={100} width={75} height={75} alt={"Download our app"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Get charged</div>
      <div className="font-light lg:px-16">
        Our truck arrives on time and powers up your vehicle as per requirement.
      </div>
    </div>
  );
}
