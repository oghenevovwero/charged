import { primaryGreen } from "@/constants";
import Link from "next/link";

export default function BtnLink({ title, to = "#" }: { title: string; to?: string }) {
  return (
    <div className="w-fit">
      <Link href={`/${to}`}>
        <div
          className={`
          bg-[${primaryGreen}] 
          cursor-pointer 
          hover:opacity-70 
          active:opacity-100 
          text-white 
          px-[33px] 
          py-[14px] 
          rounded-lg 
          text-lg`}
        >
          {title}
        </div>
      </Link>
    </div>
  );
}
