'use client';

import ExpandedNav from "./expanded-nav";
import MinimizedTopNav from "./minimized-nav";

export default function Nav() {
  return (
    <div className="">
      <div className="lg:hidden">
        <MinimizedTopNav />
      </div>
      <div className="max-lg:hidden">
        <ExpandedNav />
      </div>
    </div>
  );
};
