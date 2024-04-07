import Image from "next/image";
import nissanImg from "@/public/nissan.png";
import teslaImg from "@/public/tesla.png";
import bmwImg from "@/public/bmw.png";
import fordImg from "@/public/ford.png";
import bydImg from "@/public/byd.png";
import hyundaiImg from "@/public/hyundai.png";

export default function Partners() {
  return (
    <div className="flex w-full items-center justify-between py-4 md:py-6 bg-white mt-[-10px] px-2 sm:px-4 md:px-14 lg:px-48 xl:px-64">
      <div className="w-[40px] h-[40px]">
        <Image src={nissanImg} width={50} height={20} alt="Nissan logo" />
      </div>
      <div className="w-[60px] h-[60px]">
        <Image src={teslaImg} width={60} height={20} quality={100} alt="Tesla logo" />
      </div>
      <div className="w-[70px] h-[70px] mt-10">
        <Image src={fordImg} width={60} height={20} alt="Ford logo" />
      </div>
      <div className="w-[70px] h-[70px] mt-8">
        <Image src={hyundaiImg} width={80} height={20} alt="Hyundai logo" />
      </div>
      <div className="w-[35px] h-[35px]">
        <Image src={bmwImg} width={50} height={20} alt="BMW logo" />
      </div>
      <div className="w-[40px] h-[40px] mt-4">
        <Image src={bydImg} width={60} height={20} alt="BYD logo" />
      </div>
    </div>
  );
}
