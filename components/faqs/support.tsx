"use client";

import { faqsPageQuestions } from "@/data/faqs";
import Container from "../container";
import RenderFAQs from "../render-faqs";

export default function Support() {
  return (
    <Container className="bg-white text-black ">
      <div className="flex flex-col gap-6 max-md:gap-16 md:flex-row">
        <div className="flex-1">
          <div className={`text-[${process.env.NEXT_PUBLIC_PG}] font-bold`}>
            Support
          </div>
          <div className="my-3 text-4xl font-bold">FAQs</div>
          <div>
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our team.
          </div>
        </div>
        <RenderFAQs questions={faqsPageQuestions} />
      </div>
    </Container>
  );
}
