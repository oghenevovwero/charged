export default function GetCharging() {
  return (
    <div className="h-[60vh]">
      <div
        className="
    bg-[url('/charger3.png')] 
    bg-no-repeat
    md:bg-cover
    h-full 
    overflow-x-clip 
    flex 
    justify-start
    text-white
    items-center"
    
      >
        <div>
          <div className="text-4xl md:text-6xl w-1/2 px-2 sm:px-8 md:px-16 lg:px-36">
            Get 24/7charging delivery service for up to $0.58/KWh
          </div>
          <button className="mt-10 ml-2 sm:ml-8 md:ml-16 lg:ml-36 bg-[#00A63D] hover:cursor-pointer hover:bg-[#2f794a] text-white px-6 py-[6px] rounded-lg text-lg font-light">
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
}
