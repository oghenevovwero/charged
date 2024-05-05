import ChargeMe from "@/components/home/charge-me/charge-me";
import FAQs from "@/components/home/faqs";
import LagosMap from "@/components/home/florida-map";
import GetCharging from "@/components/home/get-charging";
import HomeBanner from "@/components/home/home-banner";
import HowItWorks from "@/components/home/how-it-works/how-it-works";
import WaitList from "@/components/home/join-waitlist/join-waitlist";
import Partners from "@/components/home/partners";
import ResponsiveNavigation from "@/components/nav";

export default function Home() {
  return (
    <div>
      <ResponsiveNavigation />
      <HomeBanner />
      <Partners />
      <LagosMap />
      <ChargeMe />
      <HowItWorks />
      <GetCharging />
      <FAQs />
      <WaitList />
    </div>
  );
}
