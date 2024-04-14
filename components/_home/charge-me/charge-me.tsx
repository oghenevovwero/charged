import Image from "next/image";
import Convenience from "./convenience";
import Flexibility from "./flexibility";
import Reliability from "./reliability";
import Sustainability from "./sustainability";
import chargeMeImg from "@/public/charge-me.png";
import Container from "@/components/container";
import Link from "next/link";
import BtnLink from "@/components/btn-link";

export default function ChargeMe() {
  return (
    <Container className="flex flex-col justify-between gap-4 bg-[#F6F8F7] sm:flex-row">
      <div className="flex w-64 max-sm:hidden xl:w-80">
        <Image src={chargeMeImg} alt="charge me" height={1050} />
      </div>
      <div className="text-4xl font-bold sm:hidden">CHARGE ME</div>
      <div className="">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Convenience />
          <Flexibility />
          <Reliability />
          <Sustainability />
        </div>
        <div className="mt-6 flex w-full items-center justify-center sm:mt-8">
          <BtnLink title="Book a charge" to="contact" />
        </div>
      </div>
    </Container>
  );
}
