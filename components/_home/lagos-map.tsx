import Image from "next/image";
import chargeImg from "@/public/charger.png";
import mapImg from "@/public/lagos.png";

export default function LagosMap() {
  return (
    <div className="h-[55vh] relative overflow-clip">
      <Image
        src={mapImg}
        placeholder="blur"
        alt="get charging"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-center items-center">
        <Image src={chargeImg} className="h-full mix-blend-color-burn" alt="charge station" />
      </div>
    </div>
  );
}
