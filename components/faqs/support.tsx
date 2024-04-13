"use client";

import Image from "next/image";
import { useState } from "react";
import plugImg from "@/public/plug.png";
import Container from "../container";
import { faqsPageQuestions } from "@/data/faqs";
import RenderFAQs from "../render-faqs";
import { primaryGreen } from "@/constants";

export default function Support() {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);
  return (
    <Container className="bg-white text-black ">
      <div className="flex gap-6 flex-col md:flex-row max-md:gap-16">
        <div className="flex-1">
          <div className={`text-[${primaryGreen}] font-bold`}>Support</div>
          <div className="text-4xl font-bold my-3">FAQs</div>
          <div>
            Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re
            looking for? Please chat to our team.
          </div>
        </div>
        <RenderFAQs questions={faqsPageQuestions} />        
      </div>
    </Container>
  );
}
