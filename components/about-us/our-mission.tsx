export default function OurMission() {
  return (
    <div className="text-black bg-white py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="flex justify-center items-center mt-10 mb-20 md:my-20 px-2">
        <img src="/about-charge.png" />
      </div>
      <div>
        <div className="text-[#00A63D] text-center mb-8 text-2xl">Our Mission</div>
        <div className="text-4xl text-center px-2 sm:px-8 md:px-16 lg:px-32 xl:px-72 font-medium">
          Your Charge, Your way: Anytime, Anywhere you want it
        </div>
        <div className="mt-10 mb-20 text-center px-2 sm:px-8 md:px-16 lg:px-32 xl:px-72">
          At Charge Me Now, we&apos;re committed to creating a sustainable and convenient charging
          infrastructure for electric vehicles, empowering individuals to adopt cleaner
          transportation options and contributing to the global shift towards a greener future.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 place-items-center lg:px-20">
          <div className="">
            <img className="rounded-md md:rounded-xl" src="/plugged-in.png" />
          </div>
          <div className="md:h-[450px] md:flex md:flex-col">
            <img className="rounded-md md:rounded-xl" src="/driver.png" />
          </div>
          <div className="md:h-[400px] md:flex md:flex-col">
            <img className="rounded-md md:rounded-xl" src="/boot.png" />
          </div>
          <div>
            <img className="rounded-md md:rounded-xl" src="/customer.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
