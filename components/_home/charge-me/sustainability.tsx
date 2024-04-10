import Image from "next/image";
import sustainabilityImg from "@/public/p4.png";

export default function Sustainability() {
  return (
    <div className="w-full bg-white text-black p-2 lg:p-5 rounded-xl">
      <div className="relative">
        <Image src={sustainabilityImg} className="rounded-lg w-full" alt="we are environmentally conscious" />
        <div className="absolute bottom-4 w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/e1.png"}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">
                Charging completed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl mt-6 mb-4 font-bold">Sustainability</div>
        <div className="">
          Use a clean and eco-friendly charging solution to reduce your carbon footprint.
        </div>
      </div>
    </div>
  );
}
