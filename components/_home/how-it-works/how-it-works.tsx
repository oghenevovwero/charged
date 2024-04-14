import Image from "next/image";
import DownloadApp from "./download-app";
import RequestCharge from "./request-charge";
import GetCharged from "./get-charged";
import Container from "@/components/container";

export default function HowItWorks() {
  return (
    <Container className="bg-white text-black ">
      <div className="text-center ">
        <div className="text-4xl font-bold">Here&apos;s how it works</div>
        <div className=" mb-16 mt-4 text-lg">Get started in 3 easy steps</div>
      </div>
      <div className="flex h-full flex-col items-start justify-around max-sm:gap-8 sm:flex-row">
        <DownloadApp />
        <RequestCharge />
        <GetCharged />
      </div>
    </Container>
  );
}
