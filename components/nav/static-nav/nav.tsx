import ExpandedStaticNav from "./expanded-nav";
import MinimizedStaticNav from "./minimized-nav";

export default function ContactNav() {
  return (
    <div>
      <div className="lg:hidden">
        <MinimizedStaticNav />
      </div>
      <div className="max-lg:hidden">
        <ExpandedStaticNav />
      </div>
    </div>
  );
}
