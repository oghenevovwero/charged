import { PRIMARY_GREEN } from "@/constants";
import Link from "next/link";

type Props = { title: string; to?: string };

export default function BtnLink({ title, to = "#" }: Props) {
  return (
    <div className="w-fit">
      <Link href={`/${to}`}>
        <div
          style={{ backgroundColor: PRIMARY_GREEN }}
          className={`
          cursor-pointer
          rounded-lg
          px-[33px] 
          py-[14px] 
          text-center
          text-lg 
          text-white 
          transition-transform 
          duration-300 
          hover:scale-95
          active:opacity-50`}
        >
          {title}
        </div>
      </Link>
    </div>
  );
}
