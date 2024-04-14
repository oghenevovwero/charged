import { UniqueTrait } from "@/types";

export default function Reason({summary, name}: UniqueTrait) {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="text-3xl font-bold mb-6 md:mb-8">{name}</div>
      <div className="text-lg">{summary}</div>
    </div>
  );
}
