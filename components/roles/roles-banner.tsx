import Image from "next/image";
import chargingImg from "@/public/roles-desk.png";

export default function RolesBanner() {
  return (
    <div className="relative h-screen overflow-clip">
      <Image
        src={chargingImg}
        placeholder="blur"
        alt="roles pages"
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex h-full w-screen items-center justify-center">
        <div className="flex flex-col px-2 pb-12 text-center  text-lg text-white md:w-3/4 md:px-12 lg:w-1/2">
          <div className="mb-32">
            Work with some of the best global talent to push a sustainable and
            convenient charging infrastructure for electric vehicles
          </div>
          <div>
            <div className="mb-10 text-5xl font-extrabold">Open positions</div>
            <div>
              Work with some of the best global talent to push a sustainable and
              convenient charging infrastructure for electric vehicles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
