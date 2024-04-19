import appleImg from "@/public/images/apple-c.png";
import bannerImg from "@/public/images/charger2.png";
import playImg from "@/public/images/playstore-c.png";
import ExportedImage from "next-image-export-optimizer";
import BannerContent from "../banner-content";
import Padding from "../padding";

export default function HomeBanner() {
  return (
    <section className="relative h-screen w-screen overflow-x-clip bg-white">
      <div className="absolute right-0 h-full w-[100.5%]">
        <ExportedImage
          src={bannerImg}
          placeholder="blur"
          alt="welcome to get charged"
          priority
          className="absolute w-[200%]"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <BannerContent className="flex items-center text-white">
        <Padding>
          <div className="sm:w-[60%]">
            <header className="text-6xl font-semibold">
              Get charged, anytime, anywhere
            </header>
            <header className="mb-6 mt-8 text-xl font-light">
              Introducing a revolutionary charging service that brings the power
              to you
            </header>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`flex cursor-pointer items-center gap-1 rounded-lg border border-gray-500 bg-[#1A202B] p-2 text-white hover:opacity-75 active:opacity-50`}
            >
              <ExportedImage
                src={appleImg}
                width={20}
                height={20}
                alt="Get on app store"
              />
              <div>
                <div className="text-[8px]">COMING SOON ON</div>
                <div className="text-[12px] font-semibold">App Store</div>
              </div>
            </div>
            <div
              className={`flex cursor-pointer items-center gap-1 rounded-lg border border-gray-500 bg-[#1A202B] p-2 text-white hover:opacity-75 active:opacity-50`}
            >
              <ExportedImage
                src={playImg}
                width={20}
                height={20}
                alt="Get on play store"
              />
              <div>
                <div className="text-[8px]">COMING SOON ON</div>
                <div className="text-[12px] font-semibold">Google play</div>
              </div>
            </div>
          </div>
        </Padding>
      </BannerContent>
    </section>
  );
}
