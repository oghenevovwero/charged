"use client";

import Image from "next/image";
import { useState } from "react";
import plugImg from "@/public/plug.png";
import Container from "../container";
import Link from "next/link";

export default function FAQs() {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);
  return (
    <Container className="bg-white text-black">
      <div className="flex flex-col md:flex-row max-md:gap-6 mb-16">
        <div className="font-bold text-4xl flex-1">Frequently Asked Questions</div>
        <div className="flex-1 w-full md:flex md:justify-end h-fit">
          <Link href={"/faqs"} className="cursor-pointer hover:bg-gray-100 font-medium text-sm text-black border  border-gray-400 px-[33px] py-[14px] rounded-lg md:text-lg">
            Other FAQs
          </Link>
        </div>
      </div>
      <div className="flex gap-6 flex-col md:flex-row justify-around">
        <div className="md:flex-1 w-full md:pl-20">
          <Image className="w-full" src={plugImg} alt="plug in" />
        </div>
        <div className="md:flex-1 lg:flex-[1.5] flex flex-col gap-8 lg:pl-28 font-medium text-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <div>
                <div
                  onClick={() => {
                    if (openedQuestionIndex === index) {
                      setOpenIndex(-1);
                      return;
                    }
                    setOpenIndex(index);
                  }}
                  className="md:cursor-pointer md:hover:opacity-35"
                >
                  {index + 1}. {faq.question}
                </div>
                <div
                  style={{
                    display: openedQuestionIndex === index ? "block" : "none",
                    transition: "display 0.5s linear",
                  }}
                  className="mt-4 text-gray-500"
                >
                  {faq.answer}
                </div>
                <div className="h-[1px] w-full bg-gray-300 mt-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How does the on-demand mobile charging service work?",
    answer:
      "Our on-demand service allows you to request a mobile charging unit to your location. Simply use our app or contact our customer support, and we'll bring the charging station to you.",
  },
  {
    question: "What types of charging stations do you offer?",
    answer:
      "Simply use our app or contact our customer support, and we'll bring the charging station to you.",
  },
  {
    question: "Can I subscribe to a plan that suits my charging needs?",
    answer: "Yes you can subscribe to a plan that suits your charging needs",
  },
  {
    question: "Is there a roadside assistance service available?",
    answer: "Yes, we have a roadside assistance service available",
  },
  {
    question: "Can I request a mobile charging station anywhere?",
    answer: "Yes, our platform provides a mobile charging station anywhere",
  },
];
