import Image from "next/image";
import reliabilityImg from "@/public/p2.png";

export default function Reliability() {
  return (
    <div className="w-full rounded-xl bg-white p-2 text-black lg:p-5">
      <div className="relative">
        <Image
          src={reliabilityImg}
          className="w-full rounded-lg"
          alt="we are reliable"
        />
        <div className="absolute bottom-4 flex w-full items-center justify-center">
          <div className="flex items-center justify-start gap-2 rounded-lg bg-white p-2 text-black">
            <Image
              src={"/driving.png"}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="We are reliable"
            />
            <div className="">
              <div className="text-sm font-semibold sm:text-[12px] md:text-sm">
                Service man is on his way
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 mt-6 text-xl font-bold">Reliability</div>
        <div className="text-lg">
          Experienced and certified experts to deliver safe and efficient
          charging for your electric vehicle.
        </div>
      </div>
    </div>
  );
}
