import ExportedImage from "next-image-export-optimizer";
import logoImg from "@/public/images/the-logo-c.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Charged404() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#1A202B]">
      <ExportedImage src={logoImg} alt="our logo" className="animate-pulse" />
      <header className="text-5xl font-bold my-2">Sorry!</header>
      <p>requested page was not found</p>

      <Link
        href={"/"}
        className="rounded-lg border px-2 py-1 md:hover:scale-[97.5%] mt-6"
      >
        Go back home
      </Link>
    </div>
  );
}
