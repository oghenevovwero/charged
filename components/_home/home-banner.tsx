import Image from "next/image";
import bannerImg from "@/public/charger2.png";
import appleImg from "@/public/apple.png";
import playImg from "@/public/playstore.png";
import Container from "../container";

export default function HomeBanner() {
  return (
    <div className="h-screen relative overflow-clip">
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
        <Container className="flex flex-col gap-5 items-start text-white">
          <div className="text-6xl font-semibold">Get charged</div>
          <div className="text-6xl font-semibold">Anytime</div>
          <div className="text-6xl font-semibold">Anywhere!</div>
          <div className="text-xl my-5  sm:w-[60%] md:w-1/2">
            Introducing a revolutionary charging service that brings the power to you
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="p-2 cursor-pointer active:opacity-50 hover:opacity-75 rounded-lg text-white border border-gray-500 flex gap-1 items-center">
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
            <div className="p-2 rounded-lg cursor-pointer hover:opacity-75 active:opacity-50 text-white border border-gray-500 flex gap-1 items-center">
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
        </Container>
      </div>
    </div>
  );
}
