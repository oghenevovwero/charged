'use client';

import ExpandedContactNav from "./expanded-contact-nav";
import MinimizedContactTopNav from "./min-contact-nav";

export default function ContactNav() {
  return (
    <div className="">
      <div className="lg:hidden">
        <MinimizedContactTopNav />
      </div>
      <div className="max-lg:hidden">
        <ExpandedContactNav />
      </div>
    </div>
  );
};
