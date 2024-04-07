import Image from "next/image";

export default function JoinTheTeam() {
  return (
    <div className="flex flex-col gap-10 items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="flex-1">
        <div className="text-4xl font-medium">Come join the team</div>
        <div className="font-light mt-10 mb-5">
          Work with some of the best global talent to push a sustainable and convenient charging
          infrastructure for electric vehicles
        </div>
        <button className="bg-[#00A63D] hover:cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
          View open roles
        </button>
      </div>
      <div className="flex-1 relative">
        <img alt="members" className="rounded-md md:rounded-r-lg" src="/members.png" />
      </div>
    </div>
  );
}
