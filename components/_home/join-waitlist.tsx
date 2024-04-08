import Image from "next/image";
import plugImg from "@/public/unrounded-plug.png";
import Container from "../about-us/container";

export default function WaitList() {
  return (
    <Container className="bg-[#F6F8F7] text-black flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:h-96">
        <div className="flex-1 bg-[#54645D] text-white rounded-3xl md:rounded-tr-none md:rounded-br-none flex flex-col p-6 sm:p-20 md:p-20 justify-center items-center">
          <div className="font-bold text-4xl">Join the WaitList</div>
          <div className="my-6 text-lg font-light">
            Be among the first to experience the future of EV charging. Enter your email address and
            phone number to secure your spot.
          </div>
          <div className="w-full relative">
            <input
              placeholder="Enter your email"
              className="bg-[#54645D] w-full py-4 px-2 text-lg font-light placeholder:text-white placeholder:text-lg placeholder:font-light outline-none border border-white rounded-xl"
            />
            <button className="bg-[#00A63D] text-lg absolute right-[4px] top-[5px] cursor-pointer hover:opacity-70 active:opacity-100 text-white px-3 py-3 rounded-lg font-light">
              Join waitlist
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-96 max-md:hidden">
          <Image className="w-full h-full rounded-r-3xl" src={plugImg} alt="plug in" />
        </div>
      </div>
    </Container>
  );
}
