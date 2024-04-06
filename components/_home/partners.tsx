import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex flex-col items-start py-10 md:py-20 bg-black mt-[-10px] px-2 sm:px-4 md:px-14 lg:px-48 xl:px-64">
      <div className="text-4xl text-white font-bold">Our partners</div>
      <div className="flex w-full items-center py-5 md:py-10 justify-between">
        <div className="w-[40px] h-[40px]">
          <Image src={"/nissan.png"} width={50} height={20} alt="Nissan logo" />
        </div>
        <div className="w-[40px] h-[40px]">
          <Image src={"/tesla.png"} width={60} height={20} alt="BYD logo" />
        </div>
        <div className="w-[70px] h-[70px] mt-10">
          <Image src={"/ford.png"} width={60} height={20} alt="Ford logo" />
        </div>
        <div className="w-[70px] h-[70px] mt-8">
          <Image src={"/hyundai.png"} width={80} height={20} alt="Hyundai logo" />
        </div>
        <div className="w-[35px] h-[35px]">
          <Image src={"/bmw.png"} width={50} height={20} alt="BMW logo" />
        </div>
        <div className="w-[40px] h-[40px] mt-4">
          <Image src={"/byd.png"} width={60} height={20} alt="BYD logo" />
        </div>
      </div>
    </div>
  );
}
