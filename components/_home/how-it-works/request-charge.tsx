import Image from "next/image";
import requestImg from "@/public/req.png";

export default function RequestCharge() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <Image src={requestImg} quality={100} width={75} height={75} alt={"Request charge"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Request charge</div>
      <div className="font-light">
        Select your location, desired service, and a time that works for you.
      </div>
    </div>
  );
}
