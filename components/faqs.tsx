"use client";

import { useState } from "react";

export default function FAQs() {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);
  return (
    <div className="bg-white text-black py-36 px-2 sm:px-8 md:px-16 lg:px-48">
      <div className="flex justify-around mb-20">
        <div className="font-bold text-2xl md:text-4xl">Frequently Asked Questions</div>
        <button className="hover:cursor-pointer hover:bg-gray-100 text-black border border-gray-400 px-6 py-[6px] rounded-lg text-sm md:text-lg font-light">
          See More FAQs
        </button>
      </div>
      <div className="flex flex-col md:flex-row max-md:gap-6 justify-around items-center">
        <div className="flex-1 w-full">
          <img className="max-md:w-full px-10 sm:px-20 md:px-0" src="/plug.png" alt="plug in" />
        </div>
        <div className="flex-1 flex flex-col justify-between items-stretch gap-10 px-2 sm:px-4 md:px-10 lg:px-20">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div>
                <div
                  onClick={() => {
                    if (openedQuestionIndex === index) {
                      return;
                    }
                    setOpenIndex(index);
                  }}
                  className="hover:cursor-pointer hover:opacity-35 text-xl"
                >
                  {index + 1}. {faq.question}
                </div>
                <div
                  style={{
                    display: openedQuestionIndex === index ? "block" : "none",
                    transition: "display 0.5s linear",
                  }}
                  className="mt-4 text-gray-500 text-lg"
                >
                  {faq.answer}
                </div>
                <div className="h-[1px] w-full bg-gray-300 mt-5" />
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
    answer: "Simply use our app or contact our customer support, and we'll bring the charging station to you.",
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
