import arrowImg from "@/public/arrow-forward.svg";
import Image from "next/image";
import Padding from "../padding";

export default function SearchRoles() {
  return (
    <Padding className="w-full py-5 bg-white">
      <div className="relative">
        <input
          placeholder="Enter your email"
          className="bg-white text-black w-full border-b border-b-gray-300 focus::border-b-gray-500 py-3 px-2 text-lg placeholder:text-gray-500 placeholder:text-lg placeholder: outline-none border border-white"
        />
        <Image
          src={arrowImg}
          width={35}
          height={35}
          alt="more roles"
          className="absolute right-0 top-4 cursor-pointer active:opacity-50"
        />
      </div>
    </Padding>
  );
}
