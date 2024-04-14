import Image from "next/image";
import downloadImg from "@/public/asd.png";
import Padding from "@/components/padding";

export default function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:pr-16">
      <Image
        src={downloadImg}
        quality={100}
        width={75}
        height={75}
        alt={"Download our app"}
      />
      <div className="mb-4 mt-8 text-2xl font-semibold">Download the app</div>
      <div className="">
        Our user-friendly app is your gateway to our charging control center.
      </div>
    </div>
  );
}
