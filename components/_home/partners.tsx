import ExportedImage from "next-image-export-optimizer";
import nissanImg from "@/public/images/nissan-c.png";
import teslaImg from "@/public/images/tesla-c.png";
import bmwImg from "@/public/images/bmw-c.png";
import fordImg from "@/public/images/ford-c.png";
import bydImg from "@/public/images/byd-c.png";
import hyundaiImg from "@/public/images/hyundai-c.png";
import Padding from "../padding";

export default function Partners() {
  return (
    <Padding
      className="grid h-full
   w-full grid-cols-6
     items-center justify-items-center gap-6  bg-white py-5"
    >
      <ExportedImage src={fordImg} className="justify-self-start" alt="ford logo" />
      <ExportedImage src={teslaImg} width={102} height={22} alt="Tesla logo" />
      <ExportedImage
        src={nissanImg}
        className="max-md:justify-self-end"
        alt="nissan logo"
      />
      <ExportedImage
        src={bydImg}
        className="max-md:justify-self-start"
        alt="byd logo"
      />
      <ExportedImage src={bmwImg} width={73} height={53} alt="BMW logo" />

      <ExportedImage src={hyundaiImg} className="justify-self-end" alt="hyundai logo" />
    </Padding>
  );
}
