import reliabilityImg from "@/public/okay.png";
import Image from "next/image";

export default function Reliability() {
  return (
    <div className="flex items-center gap-4 px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <div>
        <Image src={reliabilityImg} width={80} height={80} alt={"reliability"} />
      </div>
      <div>
        <div className="mt-8 mb-4 font-semibold text-2xl">Reliability</div>
        <div className="">
          Count on us to deliver a reliable and efficient charging experience whenever you request
          our services.
        </div>
      </div>
    </div>
  );
}
