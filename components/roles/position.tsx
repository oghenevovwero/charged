import Image from "next/image";
import clockImg from "@/public/clock-icon.png";
import locationImg from "@/public/location-icon.png";
import jobImg from "@/public/view-job.png";

export default function Position({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-lg border text-sm md:w-1/2 p-2 sm:p-4">
      <div className="flex justify-between text-[#00A63D] text-sm items-center">
        <div>{name}</div>
        <div className="flex gap-1 items-center">
          <div>View job</div>
          <div>
            <Image src={jobImg} alt="jobs" />
          </div>
        </div>
      </div>
      <div className="mt-2 mb-4 font-medium">{role}</div>
      <div className="flex gap-6 text-sm">
        <div className="flex gap-2">
          <div>
            <Image src={locationImg} alt="location" />
          </div>
          <div>Remote</div>
        </div>
        <div className="flex gap-2">
          <div>
            <Image src={clockImg} alt="clock" />
          </div>
          <div>Fulltime</div>
        </div>
      </div>
    </div>
  );
}
