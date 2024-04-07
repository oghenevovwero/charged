import Image from "next/image";
import teamImg from "@/public/team.png";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col gap-10 items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="flex-1 ">
        <div className="text-4xl font-medium md:text-5xl md:font-bold">Who we are</div>
        <div className="mt-10">
          Established in 2024, we are a dedicated team of EV enthusiasts, and sustainability
          advocates committed to driving positive change in the transportation landscape. With a
          deep understanding of the evolving needs of electric vehicle owners, we set out to create
          a mobile charging service that brings charging infrastructure directly to your doorstep,
          ensuring that clean and convenient energy is always within reach.
        </div>
      </div>
      <div className="flex-1 ">
        <Image className="rounded-md" src={teamImg} alt="collaborative workers" />
      </div>
    </div>
  );
}
