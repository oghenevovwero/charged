import Image from "next/image";
import chargeImg from "@/public/close-up.png";
import mapImg from "@/public/florida.png";
import Padding from "../padding";

export default function LagosMap() {
  return (
    <div className="relative h-[60vh] overflow-clip">
      <Image
        src={mapImg}
        placeholder="blur"
        alt="get charging"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 h-full w-screen">
        <div className="relative flex h-full justify-end">
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
