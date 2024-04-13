import Image from "next/image";
import plugImg from "@/public/unrounded-plug.png";
import Container from "../container";

export default function WaitList() {
  return (
    <Container className="bg-[#F6F8F7] text-black flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:h-96">
        <div className="flex-1 bg-[#54645D] text-white rounded-3xl md:rounded-tr-none md:rounded-br-none flex flex-col p-6 sm:p-20 md:p-20 justify-center">
          <div className="font-bold text-4xl">Join the WaitList</div>
          <div className="mt-4 mb-14 text-lg">
            Be among the first to experience the future of EV charging. Enter your email address and
            phone number to secure your spot.
          </div>
          <div className="w-full relative h-16">
            <input
              placeholder="Enter your email"
              className="bg-[#54645D] w-full h-full pl-2 sm:pl-6 py-5 pr-2 text-lg  placeholder:text-white  outline-none border border-white rounded-lg"
            />
            <button
              className={`bg-[${process.env.primaryGreen}] text-lg absolute right-[6px] top-[6px] px-3 py-3 cursor-pointer hover:opacity-70 active:opacity-100 text-white rounded-md`}
            >
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
