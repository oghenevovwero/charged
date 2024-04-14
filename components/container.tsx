import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  excludeTop?: boolean;
  excludeBottom?: boolean;
  id?: string;
};

export default function Container({
  children,
  className,
  excludeTop,
  excludeBottom,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`
      px-3 
      sm:px-8 
      md:px-[60px] 
      lg:px-[120px]
      ${excludeTop ? "" : "pt-12 md:pt-20"}
      ${excludeBottom ? "" : "pb-12 md:pb-20"}
      ${className}
    `}
    >
      {children}
    </section>
  );
}
