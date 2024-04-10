import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Padding({ children, className }: Props) {
  return (
    <div className={`px-3 sm:px-8 md:px-16 lg:px-[120px] ${className}`}>
      {children}
    </div>
  );
}
