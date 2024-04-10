import Image from "next/image";
import chargingImg from "@/public/roles-desk.png";

export default function RolesBanner() {
  return (
    <div className="h-screen relative overflow-clip">
      <Image
        src={chargingImg}
        placeholder="blur"
        alt="welcome to get charged"
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 w-screen h-full flex justify-center items-center">
        <div className="flex flex-col pb-12 text-center text-lg  text-white px-2 md:px-12 md:w-3/4 lg:w-1/2">
          <div className="mb-32">
            Work with some of the best global talent to push a sustainable and convenient charging
            infrastructure for electric vehicles
          </div>
          <div>
            <div className="text-5xl font-bold mb-10">Open positions</div>
            <div>
              Work with some of the best global talent to push a sustainable and convenient charging
              infrastructure for electric vehicles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
