import ExportedImage from "next-image-export-optimizer";
import reliabilityImg from "@/public/images/p2.png";
import drivingImg from "@/public/images/driving.png"

export default function Reliability() {
  return (
    <div className="w-full rounded-xl bg-white p-2 text-black lg:p-5">
      <div className="relative">
        <ExportedImage
          src={reliabilityImg}
          className="w-full rounded-lg"
          alt="we are reliable"
        />
        <div className="absolute animate-[bounce_1.5s_ease-in-out_infinite]  bottom-4 flex w-full items-center justify-center">
          <div className="flex items-center justify-start gap-2 rounded-lg bg-white p-2 text-black">
            <ExportedImage
              src={drivingImg}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="We are reliable"
            />
            <div>
              <div className="text-sm font-semibold sm:text-[12px] md:text-sm">
                Service man is on his way
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <header className="mb-4 mt-6 text-xl font-bold">Reliability</header>
        <p className="text-lg">
          Experienced and certified experts to deliver safe and efficient
          charging for your electric vehicle.
        </p>
      </div>
    </div>
  );
}
