import Partners from "@/components/partners";
import ChargeMe from "@/components/charge-me/charge-me";
import FAQs from "@/components/faqs";
import Footer from "@/components/footer";
import GetCharging from "@/components/get-charging";
import HowItWorks from "@/components/how-it-works";
import WaitList from "@/components/join-waitlist";
import LagosMap from "@/components/lagos-map";
import Nav from "@/components/nav/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="h-screen">
        <div
          className="
          bg-[url('/charger2.png')] 
          bg-no-repeat
          h-full 
          bg-center
          bg-cover
          overflow-hidden
          flex 
          justify-start
          items-center"
        >
          <div className="flex flex-col gap-5 px-2 sm:px-8 md:px-16 lg:px-36 items-start text-white">
            <div className="text-6xl font-semibold">Get charged</div>
            <div className="text-6xl font-semibold">Anytime</div>
            <div className="text-6xl font-semibold">Anywhere!</div>
            <div className="text-lg">
              Introducing a revolutionary charging service that brings the power to you
            </div>
            <div className="flex gap-3 justify-center items-center">
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
                  <Image src={"/playstore.png"} width={20} height={20} alt="Get on app store" />
                </div>
                <div>
                  <div className="text-[8px]">Get it on</div>
                  <div className="text-[12px] font-semibold">Google play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <LagosMap />
      <ChargeMe />
      <HowItWorks />
      <GetCharging />
      <FAQs />
      <WaitList />
      <Footer />
    </div>
  );
}
