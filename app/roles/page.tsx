import Footer from "@/components/footer";
import Nav from "@/components/nav/dynamic-nav/nav";
import Positions from "@/components/roles/positions";
import RolesBanner from "@/components/roles/roles-banner";

export default function Roles() {
  return (
    <div>
      <Nav />
      <RolesBanner />
      <Positions />
      <Footer />
    </div>
  );
}
