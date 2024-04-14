import ExpandedDynamicNav from "./expanded-nav";
import MinimizedDynamicNav from "./minimized-nav";

export default function Nav() {
  return (
    <div>
      <div className="lg:hidden">
        <MinimizedDynamicNav />
      </div>
      <div className="max-lg:hidden">
        <ExpandedDynamicNav />
      </div>
    </div>
  );
}
