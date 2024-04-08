import Image from "next/image";
import Reliability from "./reliability";
import Flexibility from "./flexibility";
import Eco from "./eco";

export default function OurPromise() {
  return (
    <div className="bg-[#EEFFF4] text-black py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="text-center ">
        <div className="font-bold text-4xl mb-14">Our promise to you</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row sm:items-center justify-around items-center">
        <Reliability />
        <Flexibility /> 
        <Eco />
      </div>
    </div>
  );
}
