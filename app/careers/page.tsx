import Availability from "@/components/_careers/availability";
import BuildWithUs from "@/components/_careers/build-with-us";
import CareersBanner from "@/components/_careers/careers-banner";
import SearchRoles from "@/components/_careers/search-roles";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";

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

