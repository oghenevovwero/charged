import getChargingImg from "@/public/images/charger3-c.png";
import ExportedImage from "next-image-export-optimizer";
import Container from "../container";
import BtnLink from "../btn-link";

export default function GetCharging() {
  return (
    <div className="relative h-[70vh] overflow-clip text-white">
      <ExportedImage
        src={getChargingImg}
        placeholder="blur"
        alt="get charging"        
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-start">
        <Container>
          <div className="text-6xl font-bold md:w-[70%] lg:w-[60%] xl:w-[50%]">
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
