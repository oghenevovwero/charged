import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  excludeTop?: boolean;
  excludeBottom?: boolean;
};

export default function Container({ children, className, excludeTop, excludeBottom }: Props) {
  return (
    <div className={`
      px-3 
      sm:px-8 
      md:px-[60px] 
      lg:px-[120px]
      ${excludeTop ? "" : "pt-12 md:pt-20"}
      ${excludeBottom ? "" : "pb-12 md:pb-20"}
      ${className}
    `}>
      {children}
    </div>
  );
}
