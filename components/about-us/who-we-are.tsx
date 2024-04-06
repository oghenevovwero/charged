export default function WhoWeAre() {
  return (
    <div className="flex flex-col items-center md:flex-row bg-[#F6F8F7] py-14 md:py-28 text-black px-2 sm:px-8 md:px-16 lg:px-32">
      <div className="flex-1 px-2 sm:px-8 md:px-16 lg:px-32">
        <div className="text-4xl font-medium mb-10">Who we are</div>
        <div>
          Established in 2024, we are a dedicated team of EV enthusiasts, and sustainability
          advocates committed to driving positive change in the transportation landscape. With a
          deep understanding of the evolving needs of electric vehicle owners, we set out to create
          a mobile charging service that brings charging infrastructure directly to your doorstep,
          ensuring that clean and convenient energy is always within reach.
        </div>
      </div>
      <div className="flex-1">
        <img className="rounded-md" src="/team.png" />
      </div>
    </div>
  );
}
