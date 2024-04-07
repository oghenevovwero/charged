import Image from "next/image";
import chargingImg from "@/public/charging.png"

export default function AboutUsBanner() {
  return (
    <div className="h-screen relative overflow-hidden">
      <Image
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-start items-center">
        <div className="flex w-full justify-center gap-5 px-2 sm:px-8 md:px-16 lg:px-36 items-start text-white">
          <div className="text-7xl md:text-8xl font-semibold text-center">About us</div>
        </div>
      </div>
    </div>
  );
}
