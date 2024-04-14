import { UniqueTrait } from "@/types";

export default function Reason({ summary, name }: UniqueTrait) {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mb-6 text-3xl font-bold md:mb-8">{name}</div>
      <div className="text-lg">{summary}</div>
    </div>
  );
}
