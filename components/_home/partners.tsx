import Image from "next/image";
import nissanImg from "@/public/nissan.png";
import teslaImg from "@/public/tesla.png";
import bmwImg from "@/public/bmw.png";
import fordImg from "@/public/ford.png";
import bydImg from "@/public/byd.png";
import hyundaiImg from "@/public/hyundai.png";
import Padding from "../padding";

export default function Partners() {
  return (
    <Padding
      className="grid h-full
   w-full grid-cols-6
     items-center justify-items-center gap-6  bg-white py-5"
    >
      <Image src={fordImg} className="justify-self-start" alt="ford logo" />
      <Image src={teslaImg} width={102} height={22} alt="Tesla logo" />
      <Image
        src={nissanImg}
        className="max-md:justify-self-end"
        alt="nissan logo"
      />
      <Image
        src={bydImg}
        className="max-md:justify-self-start"
        alt="byd logo"
      />
      <Image src={bmwImg} className="" width={73} height={53} alt="BMW logo" />

      <Image src={hyundaiImg} className="justify-self-end" alt="hyundai logo" />
    </Padding>
  );
}
