"use client";

import { FAQ } from "@/types";
import { useState } from "react";

export default function RenderFAQs({ questions }: { questions: FAQ[] }) {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);

  return (
    <div className="flex flex-col gap-8 text-lg font-medium md:flex-1 lg:flex-[1.5] lg:pl-24">
      {questions.map((faq, index) => (
        <div
          key={index}
          className="w-full"
          onClick={() => {
            if (openedQuestionIndex === index) {
              setOpenIndex(-1);
              return;
            }
            setOpenIndex(index);
          }}
        >
          <div className="md:cursor-pointer md:hover:opacity-45">
            {index + 1}. {faq.question}
          </div>
          <div
            style={{
              display: openedQuestionIndex === index ? "block" : "none",
            }}
            className="mt-4 pl-5 font-light text-gray-500"
          >
            {faq.answer}
          </div>
          <div className="mt-6 h-[1px] w-full bg-gray-300" />
        </div>
      ))}
    </div>
  );
}
