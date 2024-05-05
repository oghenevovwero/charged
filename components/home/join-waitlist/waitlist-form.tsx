"use client";

import { PRIMARY_GREEN } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useMailChimpForm } from "use-mailchimp-form";

export default function WaitlistForm() {
  const mailChimpUrl =
    "https://gochargemenow.us18.list-manage.com/subscribe/post?u=9fd1d8523f3cea31d645a213f&amp;id=1e1d47bb70&amp;f_id=003539e1f0";

  const { loading, error, success, handleSubmit, reset } =
    useMailChimpForm(mailChimpUrl);

  const [showEmailError, setShowEmailError] = useState("");
  const [showNameError, setShowNameError] = useState("");
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  const [good, setGood] = useState(false);

  const email = useRef("");
  const name = useRef("");

  useEffect(() => {
    const interval = setInterval(() => {
      setGood(!good);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (showEmailError !== "") {
          return;
        }
        if (email.current.trim() === "") {
          setShowEmailError("Email field cannot be empty");
          return;
        }
        if (showNameError !== "") {
          return;
        }
        if (name.current.trim() === "") {
          setShowNameError("Name field cannot be empty");
          return;
        }
        const splitNames = name.current.trim().split(" ");
        if (splitNames.length > 1) {
          handleSubmit({
            EMAIL: email.current.trim(),
            FNAME: splitNames[0],
            LNAME: splitNames[1],
          });
          return;
        }

        handleSubmit({ EMAIL: email.current, FNAME: name.current.trim() });
      }}
    >
      <div className="flex flex-col gap-4 sm:gap-2 sm:flex-row">
        <div className="w-full">
          <input
            type="text"
            onChange={(e) => {
              name.current = e.target.value;
              if (e.target.value === "") {
                setShowNameError("Name cannot be empty");
              } else {
                const splitNames = name.current.trim().split(" ");
                if (splitNames.length !== 2) {
                  setShowNameError("Enter first and last name");
                } else {
                  setShowNameError("");
                }
              }
            }}
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 bg-[#54645D] px-3 py-[14px] text-lg outline-none placeholder:text-white"
          />
          <div className="flex w-full justify-center text-lg text-red-400">
            {showNameError}
          </div>
        </div>
        <div className="w-full">
          <input
            type="email"
            onChange={(e) => {
              if (e.target.value === "") {
                setShowEmailError("Email cannot be empty");
              } else if (!emailRegex.test(e.target.value)) {
                setShowEmailError("Email not well formed");
              } else {
                setShowEmailError("");
                email.current = e.target.value;
              }
            }}
            placeholder="Email address"
            className="w-full rounded-lg border border-gray-300 bg-[#54645D] px-3 py-[14px] text-lg outline-none placeholder:text-white"
          />
          <div className="flex w-full justify-center text-lg text-red-400">
            {showEmailError}
          </div>
        </div>
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: loading ? "orange" : error ? "red" : PRIMARY_GREEN,
        }}
        className={`
          mt-4 
          w-full
          cursor-pointer
              rounded-md
              px-3 
              py-4 
              text-xl
              text-white 
              transition-transform 
              duration-300 
              active:opacity-50 
              md:hover:scale-[101%]`}
      >
        {loading
          ? "Processing"
          : error
            ? "Failed"
            : success
              ? "Subscribed"
              : "Join waitlist"}
      </button>
      <div
        style={{
          visibility: good ? "visible" : "hidden",
          transition: "all 1s linear",
        }}
        className="text-white text-lg sm:text-center mt-2"
      >
        Hooray! You're in line for something amazing
      </div>
    </form>
  );
}
