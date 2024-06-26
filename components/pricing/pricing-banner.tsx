import ExportedImage from "next-image-export-optimizer";
import chargingImg from "@/public/images/price-banner-c.png";
import Container from "../container";

export default function PricingBanner() {
  return (
    <div className="relative h-screen overflow-clip">
      <ExportedImage
        src={chargingImg}
        placeholder="blur"
        alt="pricing page"
        priority
        
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-start">
        <Container className="flex h-full flex-col justify-end pb-32 text-white md:pb-16 ">
          <div className="text-6xl font-bold">Become a member</div>
        </Container>
      </div>
    </div>
  );
}
