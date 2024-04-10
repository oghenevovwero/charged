import Image from "next/image";
import chargingImg from "@/public/executive-team.png"
import Container from "../container";

export default function CareersBanner() {
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
      <div className="absolute inset-0 w-screen h-full flex justify-start items-center">
        <Container className="flex flex-col h-full md:w-[50%] justify-end pb-32 md:pb-16 text-white">
          <div className="text-6xl font-bold">Join our fast growing team</div>
        </Container>
      </div>
    </div>
  );
}
