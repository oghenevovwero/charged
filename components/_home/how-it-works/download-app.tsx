import Image from "next/image";
import downloadImg from "@/public/asd.png";
import Padding from "@/components/padding";

export default function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image src={downloadImg} quality={100} width={75} height={75} alt={"Download our app"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Download the app</div>
      <div className="font-light lg:px-16">
        Our user-friendly app is your gateway to our charging control center.
      </div>
    </div>
  );
}
