import Image from "next/image";
import DownloadApp from "./download-app";
import RequestCharge from "./request-charge";
import GetCharged from "./get-charged";
import Container from "@/components/container";

export default function HowItWorks() {
  return (
    <Container className="bg-white text-black ">
      <div className="text-center ">
        <div className="font-bold text-4xl">Here&apos;s how it works</div>
        <div className=" text-lg mt-4 mb-16">Get started in 3 easy steps</div>
      </div>
      <div className="flex h-full flex-col max-sm:gap-8 sm:flex-row justify-around items-start">
        <DownloadApp />
        <RequestCharge />
        <GetCharged />
      </div>
    </Container>
  );
}
