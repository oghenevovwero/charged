import Image from "next/image";

export default function Convenience() {
  return (
    <div className="w-full bg-white text-black p-2 lg:p-5 rounded-xl">
      <div className="relative">
        <img src={"/p1.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-4  w-full flex items-center justify-center">
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
                Charge scheduled successfully
              </div>
              <div className="font-light text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl mt-6 mb-4">Convenience</div>
        <div className="font-light">
          Schedule a charging appointment at your preferred location, eliminating the hassle of
          searching for stations.
        </div>
      </div>
    </div>
  );
}