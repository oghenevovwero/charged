import reliabilityImg from "@/public/images/okay.png";
import Image from "next/image";

export default function Reliability() {
  return (
    <div className="flex items-start gap-4 px-2">
      <Image src={reliabilityImg} width={80} height={80} alt={"reliability"} />

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
