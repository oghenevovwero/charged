import AboutUsBanner from "@/components/about-us/about-banner";
import JoinTheTeam from "@/components/about-us/join-team";
import OurMission from "@/components/about-us/our-mission";
import OurPromise from "@/components/about-us/our-promise/our-promise";
import Welcome from "@/components/about-us/welcome";
import WhatSetsUsApart from "@/components/about-us/what-sets-us-apart/what-sets-us-apart";
import WhoWeAre from "@/components/about-us/who-we-are";
import ResponsiveNavigation from "@/components/nav/responsive-nav";

export default function AboutUs() {
  return (
    <div>
      <ResponsiveNavigation />
      <AboutUsBanner />
      <Welcome />
      <OurMission />
      <WhoWeAre />
      <WhatSetsUsApart />
      <OurPromise />
      <JoinTheTeam />
    </div>
  );
}
