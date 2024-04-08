import Image from "next/image";
import chargingImg from "@/public/price-banner.png";
import Container from "../about-us/container";

export default function PricingBanner() {
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
        <Container className="flex flex-col h-full justify-end pb-6 md:pb-12 text-white ">
          <div className="text-5xl md:text-6xl font-semibold">Become a member</div>
        </Container>
      </div>
    </div>
  );
}
