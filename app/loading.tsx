import ExportedImage from "next-image-export-optimizer";
import logoImg from "@/public/images/the-logo.png";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1A202B]">
      <ExportedImage src={logoImg} alt="our logo" className="animate-pulse" width={150} height={100} />
    </div>
  );
}
