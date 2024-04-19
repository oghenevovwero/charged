import Availability from "@/components/careers/availability";
import BuildWithUs from "@/components/careers/build-with-us";
import CareersBanner from "@/components/careers/careers-banner";
import SearchRoles from "@/components/careers/search-roles";
import ResponsiveNavigation from "@/components/nav/responsive-nav";

export default function Careers() {
  return (
    <div>
      <ResponsiveNavigation />
      <CareersBanner />
      <SearchRoles />
      <BuildWithUs />
      <Availability />      
    </div>
  );
}
