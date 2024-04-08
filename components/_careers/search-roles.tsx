import arrowImg from "@/public/arrow-forward.svg";
import Image from "next/image";

export default function SearchRoles() {
  return (
    <div className="w-full py-5 bg-white px-2 sm:px-8 md:px-16 lg:px-32 xl:px-56">
      <div className="relative">
        <input
          placeholder="Enter your email"
          className="bg-white text-black w-full border-b border-b-gray-300 focus::border-b-gray-500 py-3 px-2 text-lg placeholder:text-gray-500 placeholder:text-lg placeholder:font-light outline-none border border-white"
        />
        <Image
          src={arrowImg}
          width={35}
          height={35}
          alt="more roles"
          className="absolute right-0 top-4 cursor-pointer active:opacity-50"
        />
      </div>
    </div>
  );
}
