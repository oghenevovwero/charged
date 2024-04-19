import downloadImg from "@/public/images/asd-c.png";
import ExportedImage from "next-image-export-optimizer";

export default function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:pr-16">
      <ExportedImage
        src={downloadImg}
        
        width={75}
        height={75}
        alt={"Download our app"}
      />
      <div className="mb-4 mt-8 text-2xl font-semibold">Download the app</div>
      <div>
        Our user-friendly app is your gateway to our charging control center.
      </div>
    </div>
  );
}
