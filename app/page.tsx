import ChargeMe from "@/components/_home/charge-me/charge-me";
import FAQs from "@/components/_home/faqs";
import Footer from "@/components/_home/footer";
import GetCharging from "@/components/_home/get-charging";
import HomeBanner from "@/components/_home/home-banner";
import HowItWorks from "@/components/_home/how-it-works/how-it-works";
import WaitList from "@/components/_home/join-waitlist";
import LagosMap from "@/components/_home/lagos-map";
import Nav from "@/components/_home/nav/nav";
import Partners from "@/components/_home/partners";

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
