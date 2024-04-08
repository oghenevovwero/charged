import Image from "next/image";
import Reliability from "./reliability";
import Flexibility from "./flexibility";
import Eco from "./eco";
import Container from "../container";

export default function OurPromise() {
  return (
    <Container className="bg-[#EEFFF4] text-black ">
      <div className="text-center ">
        <div className="font-bold text-4xl mb-14">Our promise to you</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row sm:items-center justify-around items-center">
        <Reliability />
        <Flexibility /> 
        <Eco />
      </div>
    </Container>
  );
}
