import Image from "next/image";
import memberImg from "@/public/members.png";
import Link from "next/link";
import Container from "../container";

export default function JoinTheTeam() {
  return (
    <Container className="flex flex-col gap-10 items-center md:flex-row bg-[#F6F8F7]  text-black">
      <div className="flex-1 lg:pl-28 lg:pr-12">
        <div className="text-4xl font-bold">Come join the team</div>
        <div className="my-6">
          Work with some of the best global talent to push a sustainable and convenient charging
          infrastructure for electric vehicles
        </div>
        <div className="mt-10">
        <Link
          href={"/roles"}
          className="bg-[#00A63D] mt-10 cursor-pointer hover:opacity-75 active:opacity-100 text-white px-2 py-4 rounded-md "
        >
          View open roles
        </Link>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image alt="members" height={478} className="max-md:rounded-md md:rounded-r-3xl" src={memberImg} />
      </div>
    </Container>
  );
}
