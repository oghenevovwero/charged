import { PRIMARY_GREEN } from "@/constants";
import Link from "next/link";

export default function BtnLink({ title, to = "#" }: { title: string; to?: string }) {
  return (
    <div className="w-fit">
      <Link href={`/${to}`}>
        <div
        style={{backgroundColor: PRIMARY_GREEN}}
          className={`
          cursor-pointer
          transition-transform
          duration-300 
          hover:scale-95 
          active:opacity-50
          text-white 
          px-[33px] 
          py-[14px] 
          rounded-lg 
          text-center
          text-lg`}
        >
          {title}
        </div>
      </Link>
    </div>
  );
}
