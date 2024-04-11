type Prop = { name: string; summary: string }

export default function Reason(reason: Prop) {
  return (
    <div className="w-full h-full flex flex-col justify-center pl-4 lg:pl-12 xl:pl-24">
      <div className="text-3xl font-bold mb-6 md:mb-8">{reason.name}</div>
      <div className="text-lg">{reason.summary}</div>
    </div>
  );
}
