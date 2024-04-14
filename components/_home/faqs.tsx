import { homePageQuestions } from "@/data/faqs";
import plugImg from "@/public/plug.png";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import RenderFAQs from "../render-faqs";

export default function FAQs() {
  return (
    <Container className="bg-white text-black">
      <div className="mb-16 flex flex-col max-md:gap-6 md:flex-row">
        <div className="flex-1 text-4xl font-bold">
          Frequently Asked Questions
        </div>
        <div className="h-fit w-full flex-1 md:flex md:justify-end">
          <Link
            href={"/faqs"}
            className="cursor-pointe
            rounded-lg
            border 
            border-gray-400 
            px-[33px]
            py-[14px] 
            text-sm 
            font-medium text-black
            transition-transform 
            duration-300 
            hover:scale-95 
            active:opacity-50 
            md:text-lg"
          >
            Other FAQs
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-around gap-12 md:flex-row md:gap-6">
        <div className="w-full md:flex-1 md:pl-20 ">
          <Image className="w-full" src={plugImg} alt="plug in" />
        </div>
        <RenderFAQs questions={homePageQuestions} />
      </div>
      {/* even though waitlist comes after this section,
       we this here, so that the jump to that section can be more accurate */}
      <div id="waitlist" className="h-0 w-0" />
    </Container>
  );
}
