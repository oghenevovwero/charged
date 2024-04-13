import { homePageQuestions } from "@/data/faqs";
import plugImg from "@/public/plug.png";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import RenderFAQs from "../render-faqs";

export default function FAQs() {
  return (
    <Container className="bg-white text-black">
      <div className="flex flex-col md:flex-row max-md:gap-6 mb-16">
        <div className="font-bold text-4xl flex-1">
          Frequently Asked Questions
        </div>
        <div className="flex-1 w-full md:flex md:justify-end h-fit">
          <Link
            href={"/faqs"}
            className="cursor-pointe
            transition-transform
            duration-300 
            hover:scale-95 
            active:opacity-50
            font-medium 
            text-sm 
            text-black border
            border-gray-400 
            px-[33px] 
            py-[14px] 
            rounded-lg 
            md:text-lg"
          >
            Other FAQs
          </Link>
        </div>
      </div>
      <div className="flex gap-12 md:gap-6 flex-col md:flex-row justify-around">
        <div className="md:flex-1 w-full md:pl-20 ">
          <Image className="w-full" src={plugImg} alt="plug in" />
        </div>
        <RenderFAQs questions={homePageQuestions} />
      </div>
    </Container>
  );
}
