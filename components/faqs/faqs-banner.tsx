import Image from "next/image";
import chargingImg from "@/public/faq-banner.png";
import Container from "../container";

export default function FaqsBanner() {
  return (
    <div className="h-screen relative overflow-clip">
      <Image
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-center items-center">
        <Container className="flex flex-col md:flex-row gap-6 items-center text-lg  text-white">
          <div className="text-6xl font-bold flex-1">Top Questions about Charge Me Now</div>
          <div className="text-2xl  flex-1">Need something cleared up? Here are our most frequently asked questions.</div>
        </Container>
      </div>
    </div>
  );
}
