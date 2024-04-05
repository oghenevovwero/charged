import Image from "next/image";

export default function Reliability() {
  return (
    <div className="w-full bg-white text-black p-2 lg:p-5 rounded-xl">
      <div className="relative">
        <img src={"/p2.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-6  w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2 flex gap-2 items-center justify-start">
            <Image
              src={"/driving.png"}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="We are reliable"
            />
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm">
                Service man is on his way
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl mt-6 mb-4">Reliability</div>
        <div className="font-light">
          Experienced and certified experts to deliver safe and efficient charging for your electric
          vehicle.
        </div>
      </div>
    </div>
  );
}
