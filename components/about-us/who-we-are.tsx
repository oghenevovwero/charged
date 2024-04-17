import ExportedImage from "next-image-export-optimizer";
import teamImg from "@/public/images/team-c.png";
import Container from "../container";

export default function WhoWeAre() {
  return (
    <Container className="flex flex-col items-center gap-10 bg-[#F6F8F7] text-black  md:flex-row">
      <div className="flex-1 ">
        <div className="text-4xl font-bold">Who we are</div>
        <div className="mt-10 text-lg md:w-[80%]">
          Established in 2024, we are a dedicated team of EV enthusiasts, and
          sustainability advocates committed to driving positive change in the
          transportation landscape. With a deep understanding of the evolving
          needs of electric vehicle owners, we set out to create a mobile
          charging service that brings charging infrastructure directly to your
          doorstep, ensuring that clean and convenient energy is always within
          reach.
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <ExportedImage
          className="rounded-md"
          src={teamImg}
          alt="collaborative workers"
        />
      </div>
    </Container>
  );
}
