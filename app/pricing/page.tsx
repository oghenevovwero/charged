import WaitList from "@/components/home/join-waitlist/join-waitlist";
import ResponsiveNavigation from "@/components/nav";
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
