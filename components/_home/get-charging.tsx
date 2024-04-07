import getChargingImg from "@/public/charger3.png";
import Image from "next/image";

export default function GetCharging() {
  return (
    <div className="h-[60vh] relative text-white overflow-clip">
      <Image
        src={getChargingImg}
        placeholder="blur"
        alt="get charging"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-start items-center">
        <div>
          <div className="text-5xl font-medium md:text-6xl sm:w-3/4 px-2 sm:px-8 md:px-16 lg:px-36">
            Get 24/7charging delivery service for up to $0.58/KWh
          </div>
          <button className="mt-10 ml-2 sm:ml-8 md:ml-16 lg:ml-36 bg-[#00A63D] hover:cursor-pointer hover:opacity-70 active:opacity-100 text-white px-6 py-[6px] rounded-lg text-lg font-light">
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
}