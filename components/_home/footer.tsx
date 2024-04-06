import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1C211F] py-20 text-[#EDF0EF]">
      <div className="px-2 sm:px-8 md:px-16 lg:px-36">
        <div className="flex flex-col mb-6 sm:flex-row sm:justify-between items-start">
          <div className="flex flex-col gap-2">
            <div>
              <Image src={"/the-logo.png"} height={40} width={100} alt="Our logo" />
            </div>
            <div>Mobile EV charge that has your back</div>
          </div>
          <div className="flex flex-col max-sm:mb-6 max-sm:mt-10 gap-2 justify-center sm:items-center">
            <div className="mb-2 opacity-80">You should get our app now</div>
            <div className="flex flex-row md:flex-col gap-2 justify-center items-center">
              <div className="p-2 hover:cursor-pointer hover:opacity-75 rounded-lg text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image src={"/apple.png"} width={20} height={20} alt="Get on app store" />
                </div>
                <div>
                  <div className="text-[9px]">Download on the</div>
                  <div className="text-[13px] font-semibold">App Store</div>
                </div>
              </div>
              <div className="p-2 rounded-lg hover:cursor-pointer hover:opacity-75 text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image src={"/playstore.png"} width={20} height={20} alt="Get on app store" />
                </div>
                <div>
                  <div className="text-[9px]">Get it on</div>
                  <div className="text-[13px] font-semibold">Google play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col md:flex-row gap-4 text-gray-300">
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            About us
          </Link>
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            How it works
          </Link>
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            Pricing
          </Link>
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            FAQs
          </Link>
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            Careers
          </Link>
          <Link href="#" className="hover:cursor-pointer md:hover:opacity-75 active:opacity-60">
            Contact us
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 md:my-20 px-2">
        <img src="/footer-charge.png" />
      </div>
      <div className="px-2 sm:px-8 md:px-16 lg:px-36">
        <div className="h-[1px] bg-gray-400 w-full mb-8" />
        <div className="flex justify-between items-center text-[#8C9E96] ">
          <div className="font-light text-sm">&copy; 2024 Charge Me. All Rights Reserved</div>
          <div className="flex gap-3 items-center">
            <div className="font-extrabold text-lg">X</div>
            <div>
              <Image src={"/li.png"} width={15} height={15} alt="Linked in" />
            </div>
            <div>
              <Image src={"/fb.png"} width={15} height={15} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
