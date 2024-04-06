import Partners from "@/components/_home/partners";
import ChargeMe from "@/components/_home/charge-me/charge-me";
import FAQs from "@/components/_home/faqs";
import Footer from "@/components/_home/footer";
import GetCharging from "@/components/_home/get-charging";
import HowItWorks from "@/components/_home/how-it-works";
import WaitList from "@/components/_home/join-waitlist";
import LagosMap from "@/components/_home/lagos-map";
import Nav from "@/components/_home/nav/nav";
import Image from "next/image";
import HomeBanner from "@/components/_home/home-banner";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeBanner />
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
