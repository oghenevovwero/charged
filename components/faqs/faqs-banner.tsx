import ExportedImage from "next-image-export-optimizer";
import chargingImg from "@/public/images/faq-banner.png";
import Container from "../container";

export default function FaqsBanner() {
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
      <div className="absolute inset-0 flex h-full w-screen items-center justify-center">
        <Container className="flex flex-col items-center gap-6 text-lg text-white  md:flex-row">
          <div className="flex-1 text-6xl font-bold">
            Top Questions about Charge Me Now
          </div>
          <div className="flex-1  text-2xl">
            Need something cleared up? Here are our most frequently asked
            questions.
          </div>
        </Container>
      </div>
    </div>
  );
}
