import Image from "next/image";
import chargingImg from "@/public/faq-banner.png";

export default function FaqsBanner() {
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
      <div className="absolute inset-0 w-screen h-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between gap-6 pb-12 text-center items-center text-lg font-light text-white px-2 sm:px-8 md:px-16 lg:px-36 xl:px-64">
          <div className="text-6xl font-bold">Top Questions about Charge Me Now</div>
          <div className="text-2xl font-light">Need something cleared up? Here are our most frequently asked questions.</div>
        </div>
      </div>
    </div>
  );
}
