import clockImg from "@/public/images/clock-icon.png";
import locationImg from "@/public/images/location-icon.png";
import jobImg from "@/public/images/view-job.png";
import { Role } from "@/types";
import ExportedImage from "next-image-export-optimizer";

export default function Position({ name, role }: Role) {
  return (
    <div className="rounded-lg border p-2 text-sm sm:p-4 md:w-1/2">
      <div
        className={`flex justify-between text-[${process.env.NEXT_PUBLIC_PG}] items-center text-sm font-medium`}
      >
        <div className="text-sm font-bold">{name}</div>
        <div className="flex items-center gap-1">
          <div className="cursor-pointer font-medium active:opacity-50">
            View job
          </div>
          <div>
            <ExportedImage src={jobImg} alt="jobs" />
          </div>
        </div>
      </div>
      <div className="mb-4 mt-2 text-lg font-medium">{role}</div>
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-1">
          <div>
            <ExportedImage src={locationImg} alt="location" />
          </div>
          <div className="font-medium">Remote</div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ExportedImage src={clockImg} alt="clock" />
          </div>
          <div className="font-medium">Fulltime</div>
        </div>
      </div>
    </div>
  );
}
