"use client";

import { FAQ } from "@/types";
import { useState } from "react";

export default function RenderFAQs({ questions }: { questions: FAQ[] }) {
  const [openedQuestionIndex, setOpenIndex] = useState(-1);

  return (
    <div className="flex flex-col gap-8 text-lg font-medium md:flex-1 lg:flex-[1.5] lg:pl-24">
      {questions.map((faq, index) => (
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
            <div className="mt-8 h-[1px] w-full bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
