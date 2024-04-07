import Image from "next/image";
import chargedImg from "@/public/bat.png";

export default function GetCharged() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <Image src={chargedImg} quality={100} width={75} height={75} alt={"Download our app"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Download the app</div>
      <div className="font-light">
        Our truck arrives on time and powers up your vehicle as per requirement.
      </div>
    </div>
  );
}
