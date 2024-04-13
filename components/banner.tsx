import { extendedNavHeight, normalNavHeight } from "@/constants";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function BannerContent({ className = "", children }: Props) {
  return (
    <div className={`absolute inset-0 w-screen h-full flex flex-col`}>
      <div className={`h-[${extendedNavHeight}px] w-full`} />
      <div className={`flex-1 ${className}`}>{children}</div>
    </div>
  );
}
