import Availability from "@/components/careers/availability";
import BuildWithUs from "@/components/careers/build-with-us";
import CareersBanner from "@/components/careers/careers-banner";
import SearchRoles from "@/components/careers/search-roles";
import Footer from "@/components/footer";
import Nav from "@/components/nav/dynamic-nav/nav";

export default function Careers(){
  return <div>
    <Nav />
    <CareersBanner />
    <SearchRoles />
    <BuildWithUs />
    <Availability />
    <Footer />
  </div>
}

