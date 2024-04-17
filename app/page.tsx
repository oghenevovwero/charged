import ChargeMe from "@/components/_home/charge-me/charge-me";
import FAQs from "@/components/_home/faqs";
import LagosMap from "@/components/_home/florida-map";
import GetCharging from "@/components/_home/get-charging";
import HomeBanner from "@/components/_home/home-banner";
import HowItWorks from "@/components/_home/how-it-works/how-it-works";
import WaitList from "@/components/_home/join-waitlist";
import Partners from "@/components/_home/partners";
import Footer from "@/components/footer";
import Nav from "@/components/nav/dynamic-nav/nav";

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
