import WaitList from "@/components/_home/join-waitlist";
import ResponsiveNavigation from "@/components/nav/responsive-nav";
import Plans from "@/components/pricing/plans.tsx/plans";
import PricingBanner from "@/components/pricing/pricing-banner";

export default function Pricing() {
  return (
    <div>
      <ResponsiveNavigation />
      <PricingBanner />
      <Plans />
      <WaitList />
    </div>
  );
}
