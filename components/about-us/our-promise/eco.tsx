import Image from "next/image";
import ecoImg from "@/public/eco.png";

export default function Eco() {
  return (
    <div className="flex items-center gap-4 px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <div>
        <Image src={ecoImg} width={80} height={80} alt={"we are environmentally conscious"} />
      </div>
      <div>
        <div className="mt-8 mb-4 font-semibold text-2xl">Environmental impact</div>
        <div className="">
          Join us in making a positive impact on the environment. Every charge with us contributes
          to a more sustainable future.
        </div>
      </div>
    </div>
  );
}
