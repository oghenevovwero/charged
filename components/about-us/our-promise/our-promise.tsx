import ExportedImage from "next-image-export-optimizer";
import Reliability from "./reliability";
import Flexibility from "./flexibility";
import Eco from "./eco";
import Container from "../../container";

export default function OurPromise() {
  return (
    <Container className="bg-[#EEFFF4] text-black ">
      <div className="text-center">
        <div className="mb-14 text-4xl font-bold">Our promise to you</div>
      </div>
      <div className="flex flex-col items-center justify-around max-sm:gap-8 sm:flex-row sm:items-center">
        <Reliability />
        <Flexibility />
        <Eco />
      </div>
    </Container>
  );
}
