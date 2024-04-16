import ExportedImage from "next-image-export-optimizer";
import memberImg from "@/public/images/members.png";
import Link from "next/link";
import Container from "../container";
import BtnLink from "../btn-link";

export default function JoinTheTeam() {
  return (
    <Container className="flex flex-col items-center gap-10 bg-[#F6F8F7] text-black  md:flex-row">
      <div className="flex-1 lg:pl-28 lg:pr-12">
        <div className="text-4xl font-bold">Come join the team</div>
        <div className="my-6">
          Work with some of the best global talent to push a sustainable and
          convenient charging infrastructure for electric vehicles
        </div>
        <div className="mt-10">
          <BtnLink title="View open roles" to="roles" />
        </div>
      </div>
      <div className="relative flex-1">
        <ExportedImage
          alt="members"
          height={478}
          className="max-md:rounded-md md:rounded-r-3xl"
          src={memberImg}
        />
      </div>
    </Container>
  );
}
