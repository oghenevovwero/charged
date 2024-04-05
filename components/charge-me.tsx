import Image from "next/image";

export default function ChargeMe() {
  return (
    <div className="bg-[#F6F8F7] flex flex-col sm:flex-row justify-between gap-4 px-2 sm:px-2 md:px-16 lg:px-36 py-28">
      <div className="max-sm:hidden mr-10">
        <img src="/charge-me.png" />
      </div>
      <div className="text-[45px] sm:hidden font-bold">CHARGE ME</div>
      <div className="xl:px-52">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
          <Convenience />
          <Flexibility />
          <Reliability />
          <Sustainability />
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="mt-10 bg-[#00A63D] hover:cursor-pointer hover:bg-[#2f794a] text-white px-6 py-[6px] rounded-lg text-lg font-light">
            Book a charge
          </button>
        </div>
      </div>
    </div>
  );
}

function Convenience() {
  return (
    <div className="w-full bg-white text-black p-5 rounded-lg">
      <div className="relative">
        <img src={"/p1.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-14  w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/e1.png"}
              width={25}
              height={25}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">Charge scheduled successfully</div>
              <div className="font-light text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-semiboldibold text-xl mt-6 mb-4">Convenience</div>
        <div className="font-light">
          Schedule a charging appointment at your preferred location, eliminating the hassle of
          searching for stations.
        </div>
      </div>
    </div>
  );
}

function Flexibility() {
  return (
    <div className="w-full bg-white text-black p-5 rounded-lg">
      <div className="relative">
        <img src={"/p3.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-14  w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/e1.png"}
              width={25}
              height={25}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">Charge scheduled successfully</div>
              <div className="font-light text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-semiboldibold text-xl mt-6 mb-4">Convenience</div>
        <div className="font-light">
          Schedule a charging appointment at your preferred location, eliminating the hassle of
          searching for stations.
        </div>
      </div>
    </div>
  );
}

function Reliability() {
  return (
    <div className="w-full bg-white text-black p-5 rounded-lg">
      <div className="relative">
        <img src={"/p2.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-14  w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/e1.png"}
              width={25}
              height={25}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">Charge scheduled successfully</div>
              <div className="font-light text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-semiboldibold text-xl mt-6 mb-4">Convenience</div>
        <div className="font-light">
          Schedule a charging appointment at your preferred location, eliminating the hassle of
          searching for stations.
        </div>
      </div>
    </div>
  );
}

function Sustainability() {
  return (
    <div className="w-full bg-white text-black p-5 rounded-lg">
      <div className="relative">
        <img src={"/p4.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-14  w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/e1.png"}
              width={25}
              height={25}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">Charge scheduled successfully</div>
              <div className="font-light text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-semiboldibold text-xl mt-6 mb-4">Convenience</div>
        <div className="font-light">
          Schedule a charging appointment at your preferred location, eliminating the hassle of
          searching for stations.
        </div>
      </div>
    </div>
  );
}
