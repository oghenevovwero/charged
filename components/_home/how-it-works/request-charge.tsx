import ExportedImage from "next-image-export-optimizer";
import requestImg from "@/public/images/req.png";
import Padding from "@/components/padding";

export default function RequestCharge() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ExportedImage
        src={requestImg}
        
        width={75}
        height={75}
        alt={"Request charge"}
      />
      <div className="mb-4 mt-8 text-2xl font-semibold">Request charge</div>
      <div className=" lg:px-16">
        Select your location, desired service, and a time that works for you.
      </div>
    </div>
  );
}
