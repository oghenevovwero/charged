export default function Welcome() {
  return (
    <div className="flex flex-col items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32">
      <div className="flex-1 px-2 sm:px-8 md:px-16 lg:px-32">
        <div className="text-4xl font-medium mb-10">
          Welcome to Charge Me Now Pioneers in Mobile EV Charging
        </div>
        <div>
          At Charge Me Now, we are on a mission to revolutionize the way people charge their
          electric vehicles, making sustainable and convenient energy accessible to everyone,
          anywhere. Our journey began with a vision to create a greener tomorrow, powered by
          cutting-edge technology and a passion for environmental responsibility.
        </div>
      </div>
      <div className="flex-1">
        <img className="rounded-md" src="/road.png" />
      </div>
    </div>
  );
}
