import Image from "next/image";
import requestImg from "@/public/req.png";
import Padding from "@/components/padding";

export default function RequestCharge() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image src={requestImg} quality={100} width={75} height={75} alt={"Request charge"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Request charge</div>
      <div className="font-light lg:px-16">
        Select your location, desired service, and a time that works for you.
      </div>
    </div>
  );
}
