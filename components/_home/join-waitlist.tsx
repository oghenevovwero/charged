import Image from "next/image";
import plugImg from "@/public/plug.png";

export default function WaitList() {
  return (
    <div className="bg-black flex justify-center items-center py-14 md:py-28 px-2 sm:px-4 md:px-14 lg:px-44 xl:px-80">
      <div className="flex flex-col md:flex-row md:h-96">
        <div className="flex-1 bg-[#54645D] text-white rounded-3xl md:rounded-l-3xl flex flex-col p-6 sm:p-20 md:p-10 justify-center items-center">
          <div className="font-bold text-4xl">Join the WaitList</div>
          <div className="my-6 text-lg font-light">
            Be among the first to experience the future of EV charging. Enter your email address and
            phone number to secure your spot.
          </div>
          <div className="w-full relative">
            <input
              placeholder="Enter your email"
              className="bg-[#54645D] w-full py-3 px-2 text-lg font-light placeholder:text-white placeholder:text-lg placeholder:font-light outline-none border border-white rounded-xl"
            />
            <button className="bg-[#00A63D] absolute right-[3px] top-[3px] hover:cursor-pointer hover:opacity-70 active:opacity-100 text-white px-3 py-3 rounded-lg font-light">
              Join waitlist
            </button>
          </div>
        </div>
        <div className="flex-1 h-96 max-md:hidden">
          <Image className="w-full h-full" src={plugImg} alt="plug in" />
        </div>
      </div>
    </div>
  );
}
