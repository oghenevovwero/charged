import Image from "next/image";
import logoImg from "@/public/the-logo.png";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen w-screen items-center bg-[#1A202B]">
      <Image src={logoImg} alt="our logo" width={150} height={100} />
    </div>
  );
}
