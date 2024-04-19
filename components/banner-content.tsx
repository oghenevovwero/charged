import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function BannerContent({ className = "", children }: Props) {
  return (
    <div className={`absolute inset-0 flex h-full w-screen flex-col`}>
      <div className={`sm:h-20 w-full`} />
      <div className={`flex-1 ${className}`}>{children}</div>
    </div>
  );
}
