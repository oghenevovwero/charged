import Image from "next/image";
import clockImg from "@/public/clock-icon.png";
import locationImg from "@/public/location-icon.png";
import jobImg from "@/public/view-job.png";
import { Role } from "@/types";

export default function Position({ name, role }: Role) {
  return (
    <div className="rounded-lg border text-sm md:w-1/2 p-2 sm:p-4">
      <div className="flex justify-between text-[#00A63D] text-sm items-center font-medium">
        <div className="font-bold text-sm">{name}</div>
        <div className="flex gap-1 items-center">
          <div className="cursor-pointer active:opacity-50 font-medium">View job</div>
          <div>
            <Image src={jobImg} alt="jobs" />
          </div>
        </div>
      </div>
      <div className="mt-2 mb-4 text-lg font-medium">{role}</div>
      <div className="flex gap-6 text-sm items-center">
        <div className="flex gap-1 items-center">
          <div>
            <Image src={locationImg} alt="location" />
          </div>
          <div className="font-medium">Remote</div>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <Image src={clockImg} alt="clock" />
          </div>
          <div className="font-medium">Fulltime</div>
        </div>
      </div>
    </div>
  );
}
