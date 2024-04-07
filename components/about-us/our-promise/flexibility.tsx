import Image from "next/image";
import flexibilityImg from "@/public/flexibility.png";

export default function Flexibility() {
  return (
    <div className="flex items-center gap-4 px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <div>
        <Image src={flexibilityImg} width={80} height={80} alt={"flexibility"} />
      </div>
      <div>
        <div className="mt-8 mb-4 font-semibold text-2xl">Flexibility</div>
        <div className="">
          Your schedule is our priority. Request a charge at a time and location that suits you
          best.
        </div>
      </div>
    </div>
  );
}
