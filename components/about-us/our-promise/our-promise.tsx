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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-2 md:gap-6 lg:gap-8 sm:flex-row">
        <Reliability />
        <Flexibility />
        <Eco />
      </div>
    </Container>
  );
}
