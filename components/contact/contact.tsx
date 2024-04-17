import ExportedImage from "next-image-export-optimizer";
import chevronImg from "@/public/images/down-chevron-c.png";
import chargeImg from "@/public/images/charge-at-station-c.png";
import Container from "../container";
import { PRIMARY_GREEN } from "@/constants";

export default function ContactUs() {
  return (
    <Container className="flex flex-col justify-between gap-12 bg-white text-black sm:flex-row sm:gap-5">
      <div className="flex-1 mt-12">
        <ExportedImage src={chargeImg} alt="charging" />
      </div>
      <div className="flex w-full flex-1 flex-col gap-5 sm:mt-12">
        <div className="text-5xl font-bold">Get in touch</div>
        <div className="text-light">
          Our friendly team would love to hear from you
        </div>
        <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
          <div className="w-full">
            <div className="mb-1 text-sm font-semibold">First name</div>
            <input
              placeholder="First name"
              className="placeholder: w-full rounded-lg  border border-gray-300 bg-white px-2 py-3 text-lg text-black outline-none placeholder:text-lg"
            />
          </div>

          <div className="w-full">
            <div className="mb-1 text-sm font-semibold">Last name</div>
            <input
              placeholder="Last name"
              className="placeholder: w-full rounded-lg  border border-gray-300 bg-white px-2 py-3 text-lg text-black outline-none placeholder:text-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 text-sm font-semibold">Email</div>
          <input
            placeholder="You@company.com"
            className="placeholder: w-full rounded-lg  border border-gray-300 bg-white px-2 py-3 text-lg text-black outline-none placeholder:text-lg"
          />
        </div>
        <div className="relative w-full text-sm">
          <div className="mb-1 text-sm font-semibold">Phone number</div>
          <input
            placeholder="+1 (555) 000-0000"
            className="placeholder: w-full rounded-lg  border border-gray-300 bg-white py-3 pl-[60px] pr-2 text-lg text-black outline-none placeholder:text-lg"
          />
          <div className="absolute bottom-3 left-2 flex items-center gap-2">
            <div className="text-lg text-gray-400">US</div>
            <div>
              <ExportedImage
                src={chevronImg}
                alt="more countries"
                width={10}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 text-sm font-semibold">Message</div>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-2 py-1 outline-none"
            rows={6}
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <div className="text-lg font-medium">
              You agree to our friendly privacy policy.
            </div>
          </div>
          <div className="mt-10 flex w-full justify-center">
            <button
              style={{ backgroundColor: PRIMARY_GREEN }}
              className={`w-full cursor-pointer rounded-md px-2 py-[14px]
            text-lg 
            font-medium 
            text-white 
            transition-transform duration-300 hover:scale-x-95 active:opacity-50`}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
