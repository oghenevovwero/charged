import Image from "next/image";
import chevronImg from "@/public/down-chevron.png";
import chargeImg from "@/public/charge-at-station.png";
import Container from "../container";

export default function ContactUs() {
  return (
    <Container className="bg-white text-black flex flex-col items-center sm:flex-row gap-12 sm:gap-5 justify-between">
      <div className="flex-1 mt-10">
        <Image src={chargeImg} alt="charging" />
      </div>
      <div className="flex-1 w-full flex flex-col gap-5">
        <div className="text-4xl font-bold">Get in touch</div>
        <div className="text-light">Our friendly team would love to hear from you</div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <div className="font-semibold text-sm mb-1">First name</div>
            <input
              placeholder="First name"
              className="bg-white text-black w-full  py-3 px-2 text-lg placeholder:text-lg placeholder: outline-none border border-gray-300 rounded-lg"
            />
          </div>

          <div className="w-full">
            <div className="font-semibold text-sm mb-1">Last name</div>
            <input
              placeholder="Last name"
              className="bg-white text-black w-full  py-3 px-2 text-lg placeholder:text-lg placeholder: outline-none border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="font-semibold text-sm mb-1">Email</div>
          <input
            placeholder="You@company.com"
            className="bg-white text-black w-full  py-3 px-2 text-lg placeholder:text-lg placeholder: outline-none border border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full relative text-sm">
          <div className="font-semibold text-sm mb-1">Phone number</div>
          <input
            placeholder="+1 (555) 000-0000"
            className="bg-white text-black w-full  py-3 pr-2 pl-[60px] text-lg placeholder:text-lg placeholder: outline-none border border-gray-300 rounded-lg"
          />
          <div className="flex gap-2 items-center absolute left-2 bottom-3">
            <div className="text-gray-400 text-lg">US</div>
            <div>
              <Image src={chevronImg} alt="more countries" width={10} height={20} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-semibold text-sm mb-1">Message</div>
          <textarea
            className="border border-gray-300 w-full rounded-lg outline-none py-1 px-2"
            rows={6}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <div className="text-lg font-medium">You agree to our friendly privacy policy.</div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <button className="bg-[#00A63D] text-sm font-medium w-full cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-[14px] rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
