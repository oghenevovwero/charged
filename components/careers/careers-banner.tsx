import ExportedImage from "next-image-export-optimizer";
import chargingImg from "@/public/images/executive-team.png";
import Container from "../container";

export default function CareersBanner() {
  return (
    <div className="relative h-screen overflow-clip">
      <ExportedImage
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        priority
        
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-start">
        <Container className="flex h-full flex-col justify-end pb-32 text-white md:w-[50%] md:pb-16">
          <div className="text-6xl font-bold">Join our fast growing team</div>
        </Container>
      </div>
    </div>
  );
}
