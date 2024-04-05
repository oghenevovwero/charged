export default function Flexibility() {
  return (
    <div className="w-full bg-white text-black p-2 lg:p-5 rounded-xl">
      <div className="relative">
        <img src={"/p3.png"} className="rounded-lg w-full" alt="BMW logo" />
        <div className="absolute bottom-6 w-full flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-2">
            <div className="">
              <div className="font-semibold text-sm sm:text-[12px] md:text-sm mb-2">
                What would you like to do
              </div>
              <div className="text-sm">
                <div className="flex gap-2 items-start mb-2">
                  <input type="radio" defaultChecked className="accent-green-600 mt-[2.5px]" />
                  <div>
                    <div>Battery top up</div>
                    <div className="h-1 w-full my-1 rounded-full bg-gray-300" />
                    <div className="h-1 w-3/4 rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <input type="radio" defaultChecked={false} className="accent-green-600 mt-[2.5px]" />
                  <div>
                    <div>Battery 100% charge</div>
                    <div className="h-1 w-full my-1 rounded-full bg-gray-300" />
                    <div className="h-1 w-3/4 rounded-full bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl mt-6 mb-4">Flexibility</div>
        <div className="font-light">
          Choose from various charging options to fit your needs, from quick top-ups to full
          charges.
        </div>
      </div>
    </div>
  );
}
