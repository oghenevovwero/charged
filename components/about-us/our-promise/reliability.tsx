import reliabilityImg from "@/public/images/okay-c.png";
import ExportedImage from "next-image-export-optimizer";

export default function Reliability() {
  return (
    <div className="flex items-start gap-4 px-2">
      <ExportedImage src={reliabilityImg} width={80} height={80} alt={"reliability"} />

      <div>
        <div className="mb-4 text-2xl font-semibold">Reliability</div>
        <div className="text-lg">
          Count on us to deliver a reliable and efficient charging experience
          whenever you request our services.
        </div>
      </div>
    </div>
  );
}
