import Image from "next/image";
import downloadImg from "@/public/asd.png";

export default function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <Image src={downloadImg} quality={100} width={75} height={75} alt={"Download our app"} />
      <div className="mt-8 mb-4 font-semibold text-2xl">Download the app</div>
      <div className="font-light">
        Our user-friendly app is your gateway to our charging control center.
      </div>
    </div>
  );
}
