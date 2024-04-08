import Image from "next/image";
import chargingImg from "@/public/executive-team.png"

export default function CareersBanner() {
  return (
    <div className="h-screen relative overflow-clip">
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
        <div className="flex flex-col h-full md:w-[55%] justify-end pb-12 text-white px-2 sm:px-8 md:px-16 lg:px-32 xl:px-56">
          <div className="text-6xl font-semibold">Join our fast growing team</div>
        </div>
      </div>
    </div>
  );
}
