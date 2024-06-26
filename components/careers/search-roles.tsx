import arrowImg from "@/public/images/arrow-forward.svg";
import ExportedImage from "next-image-export-optimizer";
import Padding from "../padding";

export default function SearchRoles() {
  return (
    <Padding className="w-full bg-white py-5">
      <div className="relative">
        <input
          placeholder="Enter your email"
          className="focus::border-b-gray-500 w-full border border-b border-white border-b-gray-300 bg-white px-1 py-3 text-lg text-black outline-none placeholder:text-lg placeholder:text-gray-500"
        />
        <ExportedImage
          src={arrowImg}
          width={35}
          height={35}
          alt="more roles"
          className="absolute right-0 top-3 cursor-pointer active:opacity-50"
        />
      </div>
    </Padding>
  );
}
