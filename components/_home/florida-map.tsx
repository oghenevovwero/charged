import Image from "next/image";
import chargeImg from "@/public/close-up.png";
import mapImg from "@/public/florida.png";
import Padding from "../padding";

export default function LagosMap() {
  return (
    <div className="h-[60vh] relative overflow-clip">
      <Image
        src={mapImg}
        placeholder="blur"
        alt="get charging"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full">
        <div className="flex justify-end h-full relative">
          <Image
            fill
            src={chargeImg}
            style={{ objectFit: "cover" }}
            className="h-full mix-blend-multiply"
            alt="charge station"
          />
        </div>
      </div>
    </div>
  );
}
