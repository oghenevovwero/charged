import ExportedImage from "next-image-export-optimizer";
import convenienceImg from "@/public/images/p1.png";
import e1Img from "@/public/images/e1.png"

export default function Convenience() {
  return (
    <div className="w-full rounded-xl bg-white p-2 text-black lg:p-5">
      <div className="relative">
        <ExportedImage
          src={convenienceImg}
          className="w-full rounded-lg"
          alt="get convenience"
        />
        <div className="absolute animate-[bounce_2.5s_ease-in-out_infinite] bottom-4  flex w-full items-center justify-center">
          <div className="flex items-center justify-start gap-2 rounded-lg bg-white p-2 text-black">
            <ExportedImage
              src={e1Img}
              width={20}
              height={20}
              className="rounded-lg object-cover"
              alt="BMW logo"
            />
            <div>
              <div className="text-sm font-semibold sm:text-[12px] md:text-sm">
                Charge scheduled successfully
              </div>
              <div className=" text-[12px]">Feb 01, 2024 12:30am</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <header className="mb-4 mt-6 text-xl font-bold">Convenience</header>
        <p className="text-lg">
          Schedule a charging appointment at your preferred location,
          eliminating the hassle of searching for stations.
        </p>
      </div>
    </div>
  );
}
