import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#1C211F] py-20 text-[#EDF0EF]">
      <div className="px-2 sm:px-8 md:px-16 lg:px-36">
        <div className="flex flex-col mb-6 sm:flex-row sm:justify-between items-start">
          <div className="flex flex-col gap-2">
            <div>
              <Image src={"/the-logo.png"} height={40} width={100} alt="Our logo" />
            </div>
            <div className="font-extralight">Mobile EV charge that has your back</div>
          </div>
          <div className="flex flex-col max-sm:my-6 gap-2 justify-center sm:items-center">
            <div className="mb-2">Get the app</div>
            <div className="flex flex-row md:flex-col gap-2 justify-center items-center">
              <div className="p-2 hover:cursor-pointer hover:opacity-75 rounded-lg text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image src={"/apple.png"} width={20} height={20} alt="Get on app store" />
                </div>
                <div>
                  <div className="text-[8px]">Download on the</div>
                  <div className="text-[12px] font-semibold">App Store</div>
                </div>
              </div>
              <div className="p-2 rounded-lg hover:cursor-pointer hover:opacity-75 text-white border border-gray-500 flex gap-1 items-center">
                <div>
                  <Image src={"/google1.png"} width={20} height={20} alt="Get on app store" />
                </div>
                <div>
                  <div className="text-[8px]">Get it on</div>
                  <div className="text-[12px] font-semibold">Google play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col md:flex-row gap-4 text-gray-300">
          <div className="hover:cursor-pointer hover:opacity-75">About us</div>
          <div className="hover:cursor-pointer hover:opacity-75">How it works</div>                   
          <div className="hover:cursor-pointer hover:opacity-75">Pricing</div>
          <div className="hover:cursor-pointer hover:opacity-75">FAQs</div>
          <div className="hover:cursor-pointer hover:opacity-75">Careers</div> 
          <div className="hover:cursor-pointer hover:opacity-75">Contact us</div>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 md:my-20 px-2">
        <img src="/footer-charge.png" />
      </div>
      <div className="px-2 sm:px-8 md:px-16 lg:px-36">
        <div className="h-[1px] bg-gray-400 w-full mb-8" />
        <div className="flex justify-between items-center">
          <div className="text-[#8C9E96] font-light text-sm">
            &copy; 2024 Charge Me. All Rights Reserved
          </div>
          <div className="flex gap-3">
            <div>
              <Image src={"/twitter.png"} width={15} height={15} alt="X" />
            </div>
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
