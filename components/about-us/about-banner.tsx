import Image from "next/image";
import chargingImg from "@/public/charging.png"
import Container from "../container";

export default function AboutUsBanner() {
  return (
    <div className="h-screen relative overflow-clip">
      <Image
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-start items-center">
        <Container className="flex w-full justify-center gap-5 items-start text-white">
          <div className="text-7xl md:text-8xl font-semibold text-center">About us</div>
        </Container>
      </div>
    </div>
  );
}
