import ExportedImage from "next-image-export-optimizer";
import flexibilityImg from "@/public/images/flexibility-c.png";

export default function Flexibility() {
  return (
    <div className="flex items-start gap-4 px-2">
      <ExportedImage src={flexibilityImg} width={80} height={80} alt={"flexibility"} />

      <div>
        <div className="mb-4 text-2xl font-semibold">Flexibility</div>
        <div className="text-lg">
          Your schedule is our priority. Request a charge at a time and location
          that suits you best.
        </div>
      </div>
    </div>
  );
}
