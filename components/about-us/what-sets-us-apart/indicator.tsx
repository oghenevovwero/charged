export default function ImageIndicator({indicatorIndex}:{indicatorIndex: number}){
  return <div className="flex w-full justify-end">
  <div className="flex items-center gap-1" key={0}>
    <div className="flex h-[6px] w-36 items-center rounded-full bg-gray-500">
      <div
        style={{
          width: `${((indicatorIndex + 1)/ 3) * 100}%`,
          transition: "all 0.25s linear",
        }}
        className="h-full rounded-full bg-gray-100"
      />
    </div>
    <div className="text-sm font-bold">{indicatorIndex + 1}/3</div>
  </div>
</div>
}
