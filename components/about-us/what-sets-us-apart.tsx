export default function WhatSetsUsApart() {
  return (
    <div className="bg-[#2A322F] text-white py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-32">
      <div>What sets us apart</div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-1 px-2 sm:px-8 md:px-16 lg:px-32">
          <div className="text-4xl font-medium mb-10">On-Demand convenience</div>
          <div>
            At Charge Me Now, we are on a mission to revolutionize the way people charge their
            electric vehicles, making sustainable and convenient energy accessible to everyone,
            anywhere. Our journey began with a vision to create a greener tomorrow, powered by
            cutting-edge technology and a passion for environmental responsibility.
          </div>
        </div>
        <div className="flex-1">
          <img className="rounded-lg" src="/trailer.png" />
        </div>
      </div>
      <div className="flex justify-center h-8 items-center gap-3 mt-8">
        <div className="flex items-center h-8 gap-3 mt-8">
          <div className="h-4 w-4 p-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-4 p-4 rounded-full bg-gray-300"></div>
        </div>
        <div className="w-40 h-[5px] rounded-full bg-gray-300" />
      </div>
    </div>
  );
}
