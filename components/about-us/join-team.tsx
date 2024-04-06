export default function JoinTheTeam() {
  return (
    <div className="flex bg-white text-black">
      <div>
        <div>Come join the team</div>
        <p>
          Work with some of the best global talent to push a sustainable and convenient charging
          infrastructure for electric vehicles
        </p>
        <button className="bg-[#00A63D] hover:cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-2 rounded-md font-light">
          View open roles
        </button>
      </div>
      <div>
        <img className="rounded-r-lg" src="/members.png" />
      </div>
    </div>
  );
}
