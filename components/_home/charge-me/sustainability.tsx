import Image from "next/image";
import sustainabilityImg from "@/public/p4.png";

export default function Sustainability() {
  return (
    <div className="w-full rounded-xl bg-white p-2 text-black lg:p-5">
      <div className="relative">
        <Image
          src={sustainabilityImg}
          className="w-full rounded-lg"
          alt="we are environmentally conscious"
        />
        <div className="absolute bottom-4 flex w-full items-center justify-center">
          <div className="flex items-center justify-start gap-2 rounded-lg bg-white p-2 text-black">
            <Image
              src={"/e1.png"}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="text-sm font-semibold sm:text-[12px] md:text-sm">
                Charging completed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 mt-6 text-xl font-bold">Sustainability</div>
        <div className="text-lg">
          Use a clean and eco-friendly charging solution to reduce your carbon
          footprint.
        </div>
      </div>
    </div>
  );
}
