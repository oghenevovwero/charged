import { Children, ReactNode } from "react";

export default function StackedImages({ children }: { children: ReactNode }) {
  const actualChildren = Children.toArray(children);
  const firstChild = actualChildren.at(0);
  const secondChild = actualChildren.at(1);
  const thirdChild = actualChildren.at(2);
  const fourthChild = actualChildren.at(3);

  return (
    <div className="grid h-[350px] grid-cols-2 gap-1 sm:gap-2 md:grid-cols-4 md:gap-4 lg:h-[375px] xl:h-[400px]">
      <div className="h-[80%] place-self-end">{firstChild}</div>
      <div className="h-[80%] place-self-start">{secondChild}</div>
      <div className="h-[80%] place-self-center">{thirdChild}</div>
      <div className="h-[80%] place-self-end">{fourthChild}</div>
    </div>
  );
}
