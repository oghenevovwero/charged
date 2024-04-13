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
    <Container className="bg-[#F6F8F7] flex flex-col sm:flex-row justify-between gap-4">
      <div className="max-sm:hidden flex w-64 xl:w-80">
        <Image src={chargeMeImg} alt="charge me" height={1050} />
      </div>
      <div className="text-4xl sm:hidden font-bold">CHARGE ME</div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Convenience />
          <Flexibility />
          <Reliability />
          <Sustainability />
        </div>
        <div className="mt-6 sm:mt-8 flex w-full justify-center items-center">
          <BtnLink title="Book a charge" to="contact" />
        </div>
      </div>
    </Container>
  );
}
