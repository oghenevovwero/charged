"use client";

import Image from "next/image";
import { useState } from "react";
import plugImg from "@/public/plug.png";

export default function Support() {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);
  return (
    <div className="bg-white text-black py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-36 xl:px-64">
      <div className="flex flex-col md:flex-row max-md:gap-12 justify-around">
        <div className="flex-1">
          <div className="text-[#00A63D] font-bold">Support</div>
          <div className="text-4xl font-bold my-3">FAQs</div>
          <div>
            Everything you need to know about the product and billing. Can’t find the answer you’re
            looking for? Please chat to our team.
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between items-stretch gap-10 px-2 sm:px-4 md:px-10 lg:px-20">
          {faqs.map((faq, index) => (
            <div key={index} className="w-fit">
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
                <div className="h-[1px] w-full bg-gray-300 mt-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
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
  {
    question: "What types of charging connectors are available on the mobile station?",
    answer: "This is a generic placeholder text to this question that will be answered later",
  },
  {
    question:
      "How long does it take for the mobile charging station to arrive after a request is made?",
    answer: "This is a generic placeholder text to this question that will be answered later",
  },
  {
    question: "Are there any additional fees for using the mobile charging station service?",
    answer: "This is a generic placeholder text to this question that will be answered later",
  },
  {
    question: "Can the mobile charging station accommodate multiple vehicles at once?",
    answer: "This is a generic placeholder text to this question that will be answered later",
  },
];
