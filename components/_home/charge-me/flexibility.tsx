import flexibilityImg from "@/public/p3.png";
import Image from "next/image";

export default function Flexibility() {
  return (
    <div className="w-full rounded-xl bg-white p-2 text-black lg:p-5">
      <div className="relative">
        <Image
          src={flexibilityImg}
          className="w-full rounded-lg"
          alt="we give you flexibility"
        />
        <div className="absolute animate-[bounce_3s_ease-in-out_infinite]  bottom-4 flex w-full items-center justify-center">
          <div className="rounded-lg bg-white p-2 text-black">
            <div>
              <div className="mb-1 text-sm font-semibold">
                What would you like to do
              </div>
              <div className="text-[12px] sm:text-sm">
                <div className="mb-1 flex items-start gap-2">
                  <input
                    type="radio"
                    defaultChecked
                    className="mt-[2.5px] accent-green-600"
                  />
                  <div>
                    <div>Battery top up</div>
                    <div className="my-1 h-1 w-full rounded-full bg-gray-300" />
                    <div className="h-1 w-3/4 rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="radio"
                    defaultChecked={false}
                    className="mt-[2.5px] accent-green-600"
                  />
                  <div>
                    <div>Battery 100% charge</div>
                    <div className="my-1 h-1 w-full rounded-full bg-gray-300" />
                    <div className="h-1 w-3/4 rounded-full bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <header className="mb-4 mt-6 text-xl font-bold">Flexibility</header>
        <p className="text-lg">
          Choose from various charging options to fit your needs, from quick
          top-ups to full charges.
        </p>
      </div>
    </div>
  );
}
