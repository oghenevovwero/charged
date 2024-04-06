import Image from "next/image";

export default function AboutUsBanner() {
  return (
    <div className="h-screen">
      <div
        className="
      bg-[url('/charging.png')] 
      bg-no-repeat
      h-full 
      bg-center
      bg-cover
      overflow-hidden
      flex 
      justify-start
      items-center"
      >
        <div className="flex w-full justify-center gap-5 px-2 sm:px-8 md:px-16 lg:px-36 items-start text-white">
          <div className="text-6xl font-semibold">Know more about us</div>
        </div>
      </div>
    </div>
  );
}
