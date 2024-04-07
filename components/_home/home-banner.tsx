import Image from "next/image";
import bannerImg from "@/public/charger2.png";
import appleImg from "@/public/apple.png";
import playImg from "@/public/playstore.png";

export default function HomeBanner() {
  return (
    <div className="h-screen relative overflow-hidden">
      <Image
        src={bannerImg}
        placeholder="blur"
        alt="welcome to get charged"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-start items-center">
        <div className="flex flex-col gap-5 px-2 sm:px-8 md:px-16 lg:px-36 items-start text-white">
          <div className="text-6xl font-semibold">Get charged</div>
          <div className="text-6xl font-semibold">Anytime</div>
          <div className="text-6xl font-semibold">Anywhere!</div>
          <div className="text-lg">
            Introducing a revolutionary charging service that brings the power to you
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="p-2 hover:cursor-pointer hover:opacity-75 rounded-lg text-white border border-gray-500 flex gap-1 items-center">
              <div>
                <Image
                  src={appleImg}
                  width={20}
                  height={20}
                  alt="Get on app store"
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <div>
                <div className="text-[8px]">Download on the</div>
                <div className="text-[12px] font-semibold">App Store</div>
              </div>
            </div>
            <div className="p-2 rounded-lg hover:cursor-pointer hover:opacity-75 text-white border border-gray-500 flex gap-1 items-center">
              <div>
                <Image
                  src={playImg}
                  width={20}
                  height={20}
                  alt="Get on play store"
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <div>
                <div className="text-[8px]">Get it on</div>
                <div className="text-[12px] font-semibold">Google play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}