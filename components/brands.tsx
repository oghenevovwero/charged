import Image from "next/image";

export default function Brands() {
  return (
    <div className="flex items-center py-5 md:py-10 justify-around bg-black">
      <div>
        <Image src={"/nissan.png"} width={60} height={20} alt="Nissan logo" />
      </div>
      <div>
        <Image src={"/tesla.png"} width={60} height={20} alt="BYD logo" />
      </div>
      <div>
        <Image src={"/ford.png"} width={60} height={20} alt="Ford logo" />
      </div>
      <div>
        <Image src={"/hyundai.png"} width={60} height={20} alt="Hyundai logo" />
      </div>
      <div>
        <Image src={"/bmw.png"} width={60} height={20} alt="BMW logo" />
      </div>
      <div>
        <Image src={"/byd.png"} width={60} height={20} alt="BYD logo" />
      </div>
    </div>
  );
}
