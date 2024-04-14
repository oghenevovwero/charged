import getChargingImg from "@/public/charger3.png";
import Image from "next/image";
import Container from "../container";
import BtnLink from "../btn-link";

export default function GetCharging() {
  return (
    <div className="relative h-[70vh] overflow-clip text-white">
      <Image
        src={getChargingImg}
        placeholder="blur"
        alt="get charging"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-start">
        <Container>
          <div className="w-[90%] text-5xl font-bold leading-[55px] sm:w-[60%] sm:leading-[60px] lg:w-[50%] xl:w-[40%]">
            Get 24/7 charging delivery service for up to $0.58/KWh
          </div>
          <div className="mt-6 sm:mt-8">
            <BtnLink title="Become a member" to="#waitlist" />
          </div>
        </Container>
      </div>
    </div>
  );
}
