import WaitList from "@/components/_home/join-waitlist";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";
import Plans from "@/components/pricing/plans.tsx/plans";
import PricingBanner from "@/components/pricing/pricing-banner";

export default function Pricing() {
  return (
    <div>
      <Nav />
      <PricingBanner />
      <Plans />
      <WaitList />
      <Footer />
    </div>
  );
}
