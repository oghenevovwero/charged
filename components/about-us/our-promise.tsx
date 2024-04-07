import Image from "next/image";
import Reliability from "./our-promise/reliability";
import Flexibility from "./our-promise/flexibility";
import Eco from "./our-promise/eco";

export default function OurPromise() {
  return (
    <div className="bg-[#EEFFF4] text-black py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-36">
      <div className="text-center ">
        <div className="font-bold text-4xl">Our promise to you</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row justify-around items-center">
        <Reliability />
        <Flexibility />
        <Eco />
      </div>
    </div>
  );
}
