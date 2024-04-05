import Image from "next/image";

export default function LagosMap() {
  return (
    <div className="h-[50vh]">
      <div
        className="
          bg-[url('/lagos.png')] 
          bg-repeat-round
          h-full 
          overflow-x-clip 
          flex
          justify-center
          md:justify-end
          md:pr-10
          items-center"
      >
        <img src="/charger.png" className="h-[50vh] mix-blend-color-burn" />
      </div>
    </div>
  );
}
