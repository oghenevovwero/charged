import ExportedImage from "next-image-export-optimizer";
import chargingImg from "@/public/images/charging-c.png";
import Container from "../container";

export default function AboutUsBanner() {
  return (
    <div className="relative h-screen overflow-clip">
      <ExportedImage
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-start">
        <Container className="flex w-full items-start justify-center gap-5 text-white">
          <div className="text-center text-7xl font-semibold md:text-8xl">
            About us
          </div>
        </Container>
      </div>
    </div>
  );
}
