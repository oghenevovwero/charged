import appleImg from "@/public/apple.png";
import bannerImg from "@/public/charger2.png";
import playImg from "@/public/playstore.png";
import Image from "next/image";
import BannerContent from "../banner";
import Padding from "../padding";

export default function HomeBanner() {
  return (
    <div className="h-screen w-screen bg-white relative overflow-x-clip">
      <div className="w-[100.5%] h-full absolute right-0">
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
            <div className="text-6xl font-semibold">Get charged, anytime, anywhere</div>
            <div className="text-xl mt-8 mb-6 font-light">
              Introducing a revolutionary charging service that brings the power to you
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className={`p-2 cursor-pointer bg-[${process.env.primaryBlue}] active:opacity-50 hover:opacity-75 rounded-lg text-white border border-gray-500 flex gap-1 items-center`}
            >
              <div>
                <Image src={appleImg} width={20} height={20} alt="Get on app store" quality={100} />
              </div>
              <div>
                <div className="text-[8px]">COMING SOON ON</div>
                <div className="text-[12px] font-semibold">App Store</div>
              </div>
            </div>
            <div
              className={`p-2 rounded-lg bg-[${process.env.primaryBlue}] cursor-pointer hover:opacity-75 active:opacity-50 text-white border border-gray-500 flex gap-1 items-center`}
            >
              <div>
                <Image src={playImg} width={20} height={20} alt="Get on play store" quality={100} />
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
