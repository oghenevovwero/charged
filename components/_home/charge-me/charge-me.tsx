import Image from "next/image";
import Convenience from "./convenience";
import Flexibility from "./flexibility";
import Reliability from "./reliability";
import Sustainability from "./sustainability";
import chargeMeImg from "@/public/charge-me.png";

export default function ChargeMe() {
  return (
    <div className="bg-[#F6F8F7] flex flex-col sm:flex-row justify-between gap-4 px-2 sm:px-2 md:px-12 lg:px-28 py-14 md:py-28">
      <div className="max-sm:hidden flex justify-center mr-10 w-64 xl:w-80">
        <Image src={chargeMeImg} alt="charge me" height={1050}  />
      </div>
      <div className="text-4xl sm:hidden font-bold">CHARGE ME</div>
      <div className="xl:px-36 2xl:px-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6">
          <Convenience />
          <Flexibility />
          <Reliability />
          <Sustainability />
        </div>
        <div className="w-full flex justify-start sm:justify-center items-center">
          <button className="mt-10 bg-[#00A63D] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-6 py-[6px] rounded-lg text-lg font-light">
            Book a charge
          </button>
        </div>
      </div>
    </div>
  );
}
