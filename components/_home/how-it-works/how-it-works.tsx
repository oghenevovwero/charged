import Image from "next/image";
import DownloadApp from "./download-app";
import RequestCharge from "./request-charge";
import GetCharged from "./get-charged";

export default function HowItWorks() {
  return (
    <div className="bg-white text-black py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-36">
      <div className="text-center ">
        <div className="font-bold text-4xl">Here&apos;s how it works</div>
        <div className="font-light text-lg mt-4 mb-16">Get started in 3 easy steps</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row justify-around items-center">
        <DownloadApp />
        <RequestCharge />
        <GetCharged />
      </div>
    </div>
  );
}

function Step({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <Image src={image} quality={100} width={75} height={75} alt={name} />
      <div className="mt-8 mb-4 font-semibold text-2xl">{name}</div>
      <div className="font-light">{description}</div>
    </div>
  );
}
