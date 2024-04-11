"use client";

import { ReactNode, useEffect, useState } from "react";

type FadeInProps = {
  children: ReactNode;
  delayMs?: number;
  startOpacity?:
    | 0.1
    | 0.2
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.8
    | 0.9
    | 0.125
    | 0.225
    | 0.325
    | 0.425
    | 0.525
    | 0.625
    | 0.725
    | 0.825
    | 0.925
    | 0.15
    | 0.25
    | 0.35
    | 0.45
    | 0.55
    | 0.65
    | 0.75
    | 0.85
    | 0.95
    | 1;
};

export default function FadeInRender({
  children,
  delayMs = 100,
  startOpacity = 0.2,
}: FadeInProps) {
  const [opacity, setOpacity] = useState(startOpacity);
  useEffect(() => {
    const a = setTimeout(() => {
      setOpacity(1);
    }, delayMs);

    return () => clearTimeout(a);
  }, []);

  return (
    <div style={{ transition: "all 1s linear", opacity: opacity }} className="h-full w-full">
      {children}
    </div>
  );
}
