import ExportedImage from "next-image-export-optimizer";
import plugImg from "@/public/images/unrounded-plug-c.png";
import Container from "../container";
import { PRIMARY_GREEN } from "@/constants";

export default function WaitList() {
  return (
    <Container className="flex items-center justify-center bg-[#F6F8F7] text-black">
      <div className="flex flex-col md:h-96 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-3xl bg-[#54645D] p-6 text-white sm:p-20 md:rounded-br-none md:rounded-tr-none md:p-20">
          <div className="text-4xl font-bold">Join the WaitList</div>
          <div className="mb-14 mt-4 text-lg">
            Be among the first to experience the future of EV charging. Enter
            your email address to secure your spot.
          </div>
          <div className="relative h-16 w-full">
            <input
              placeholder="Enter your email"
              className="h-full w-full rounded-lg border border-white bg-[#54645D] py-5 pl-2  pr-2  text-lg outline-none placeholder:text-white sm:pl-6"
            />
            <button
              style={{ backgroundColor: PRIMARY_GREEN }}
              className={`
              absolute right-[6px] 
              top-[6px] cursor-pointer 
              rounded-md 
              px-3 
              py-3 
              text-lg
              text-white 
              transition-transform 
              duration-300 
              md:hover:scale-95 
              active:opacity-50`}
            >
              Join waitlist
            </button>
          </div>
        </div>
        <div className="h-96 w-full flex-1 max-md:hidden">
          <ExportedImage
            className="h-full w-full rounded-r-3xl"
            src={plugImg}
            alt="plug in"
          />
        </div>
      </div>
    </Container>
  );
}
