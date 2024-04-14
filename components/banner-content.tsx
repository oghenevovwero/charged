import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function BannerContent({ className = "", children }: Props) {
  return (
    <div className={`absolute inset-0 w-screen h-full flex flex-col`}>
      <div className={`w-full h-20`} />
      <div className={`flex-1 ${className}`}>{children}</div>
    </div>
  );
}
