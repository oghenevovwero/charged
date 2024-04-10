import getChargingImg from "@/public/charger3.png";
import Image from "next/image";
import Container from "../container";

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
        <Container>
          <div className="text-5xl font-bold w-[90%] sm:w-3/4 md:w-1/2 leading-[60px]">
            Get 24/7charging delivery service for up to $0.58/KWh
          </div>
          <button className="mt-6 bg-[#00A63D] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-[33px] py-[14px] rounded-lg text-lg ">
            Become a member
          </button>
        </Container>
      </div>
    </div>
  );
}
