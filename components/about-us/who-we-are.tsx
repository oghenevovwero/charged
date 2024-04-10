import Image from "next/image";
import teamImg from "@/public/team.png";
import Container from "../container";

export default function WhoWeAre() {
  return (
    <Container className="flex flex-col gap-10 items-center md:flex-row bg-[#F6F8F7]  text-black">
      <div className="flex-1 ">
        <div className="text-4xl font-bold">Who we are</div>
        <div className="mt-10">
          Established in 2024, we are a dedicated team of EV enthusiasts, and sustainability
          advocates committed to driving positive change in the transportation landscape. With a
          deep understanding of the evolving needs of electric vehicle owners, we set out to create
          a mobile charging service that brings charging infrastructure directly to your doorstep,
          ensuring that clean and convenient energy is always within reach.
        </div>
      </div>
      <div className="flex-1 ">
        <Image className="rounded-md" src={teamImg} alt="collaborative workers" />
      </div>
    </Container>
  );
}
