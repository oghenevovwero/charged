import welcomeImg from "@/public/road.png";
import Image from "next/image";
import Padding from "../padding";
import Container from "../container";

export default function Welcome() {
  return (
    <Container className="flex flex-col items-center justify-between md:flex-row bg-[#F6F8F7] text-black">
      <div className="flex-1">
        <div className="text-4xl font-bold">
          Welcome to Charge Me Now. We are pioneers in Mobile EV Charging
        </div>
        <div className="my-10">
          At Charge Me Now, we are on a mission to revolutionize the way people charge their
          electric vehicles, making sustainable and convenient energy accessible to everyone,
          anywhere. Our journey began with a vision to create a greener tomorrow, powered by
          cutting-edge technology and a passion for environmental responsibility.
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image className="rounded-md" src={welcomeImg} alt="take the journey with us" />
      </div>
    </Container>
  );
}
