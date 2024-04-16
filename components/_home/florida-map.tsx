import ExportedImage from "next-image-export-optimizer";
import chargeImg from "@/public/images/close-up.png";
import mapImg from "@/public/images/florida.png";
import Padding from "../padding";

export default function LagosMap() {
  return (
    <div className="relative h-[60vh] overflow-clip">
      <ExportedImage
        src={mapImg}
        placeholder="blur"
        alt="get charging"
        
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 h-full w-screen">
        <div className="relative flex h-full justify-end">
          <ExportedImage
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
