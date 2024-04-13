import getChargingImg from "@/public/charger3.png";
import Image from "next/image";
import Container from "../container";
import { primaryGreen } from "@/constants";
import BtnLink from "../btn-link";

export default function GetCharging() {
  return (
    <div className="h-[70vh] relative text-white overflow-clip">
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
          <div className="text-5xl font-bold w-[90%] sm:w-[60%] lg:w-[50%] xl:w-[40%] leading-[55px] sm:leading-[60px]">
            Get 24/7 charging delivery service for up to $0.58/KWh
          </div>
          <div className="mt-6 sm:mt-8">
            <BtnLink title="Become a member" to="/contact" />
          </div>
        </Container>
      </div>
    </div>
  );
}
