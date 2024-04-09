import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className }: Props) {
  return (
    <div className={`px-3 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-16 md:py-28 ${className}`}>
      {children}
    </div>
  );
}