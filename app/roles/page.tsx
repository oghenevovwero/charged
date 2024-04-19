import ResponsiveNavigation from "@/components/nav/responsive-nav";
import Positions from "@/components/roles/positions";
import RolesBanner from "@/components/roles/roles-banner";

export default function Roles() {
  return (
    <div>
      <ResponsiveNavigation />
      <RolesBanner />
      <Positions />
    </div>
  );
}
