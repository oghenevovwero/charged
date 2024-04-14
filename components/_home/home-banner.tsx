import appleImg from "@/public/apple.png";
import bannerImg from "@/public/charger2.png";
import playImg from "@/public/playstore.png";
import Image from "next/image";
import BannerContent from "../banner-content";
import Padding from "../padding";

export default function HomeBanner() {
  return (
    <div className="relative h-screen w-screen overflow-x-clip bg-white">
      <div className="absolute right-0 h-full w-[100.5%]">
        <Image
          src={bannerImg}
          placeholder="blur"
          alt="welcome to get charged"
          quality={100}
          priority
          className="absolute w-[200%]"
          fill
          // sizes="120vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <BannerContent className="flex items-center text-white">
        <Padding className="">
          <div className="sm:w-[60%]">
            <div className="text-6xl font-semibold">
              Get charged, anytime, anywhere
            </div>
            <div className="mb-6 mt-8 text-xl font-light">
              Introducing a revolutionary charging service that brings the power
              to you
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`cursor-pointer p-2 bg-[${process.env.NEXT_PUBLIC_PB}] flex items-center gap-1 rounded-lg border border-gray-500 text-white hover:opacity-75 active:opacity-50`}
            >
              <div>
                <Image
                  src={appleImg}
                  width={20}
                  height={20}
                  alt="Get on app store"
                  quality={100}
                />
              </div>
              <div>
                <div className="text-[8px]">COMING SOON ON</div>
                <div className="text-[12px] font-semibold">App Store</div>
              </div>
            </div>
            <div
              className={`rounded-lg p-2 bg-[${process.env.NEXT_PUBLIC_PB}] flex cursor-pointer items-center gap-1 border border-gray-500 text-white hover:opacity-75 active:opacity-50`}
            >
              <div>
                <Image
                  src={playImg}
                  width={20}
                  height={20}
                  alt="Get on play store"
                  quality={100}
                />
              </div>
              <div>
                <div className="text-[8px]">COMING SOON ON</div>
                <div className="text-[12px] font-semibold">Google play</div>
              </div>
            </div>
          </div>
        </Padding>
      </BannerContent>
    </div>
  );
}
