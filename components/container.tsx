import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className }: Props) {
  return (
    <div className={`px-3 sm:px-8 md:px-[60px] lg:px-[120px] py-12 md:py-20 ${className}`}>
      {children}
    </div>
  );
}
