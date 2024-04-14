import arrowImg from "@/public/arrow-forward.svg";
import Image from "next/image";
import Padding from "../padding";

export default function SearchRoles() {
  return (
    <Padding className="w-full bg-white py-5">
      <div className="relative">
        <input
          placeholder="Enter your email"
          className="focus::border-b-gray-500 placeholder: w-full border border-b border-white border-b-gray-300 bg-white px-2 py-3 text-lg text-black outline-none placeholder:text-lg placeholder:text-gray-500"
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
