"use client";

import React, { useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import plugImg from "@/public/images/unrounded-plug-c.png";
import Container from "../../container";
import { PRIMARY_GREEN } from "@/constants";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function WaitlistForm() {
  const mailChimpUrl =
    "https://gochargemenow.us18.list-manage.com/subscribe/post?u=9fd1d8523f3cea31d645a213f&amp;id=1e1d47bb70&amp;f_id=003539e1f0";

  const { loading, error, success, handleSubmit } =
    useMailChimpForm(mailChimpUrl);

  const [showError, setShowError] = useState(false);

  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  const email = useRef("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!showError) {
            handleSubmit({ EMAIL: email.current });
          }
        }}
      >
        <input
          autoFocus
          type="email"
          onChange={(e) => {
            if (emailRegex.test(e.target.value) || e.target.value === "") {
              setShowError(false);
              email.current = e.target.value;
            } else {
              setShowError(true);
            }
          }}
          placeholder="Enter your email"
          className="h-full w-full rounded-lg border border-white bg-[#54645D] py-5 pl-2  pr-2  text-lg outline-none placeholder:text-white sm:pl-6"
        />
        <button
          type="submit"
          style={{ backgroundColor: PRIMARY_GREEN }}
          className={`
              absolute right-[6px] 
              top-[6px] cursor-pointer 
              rounded-md
              px-3 
              py-3 
              text-lg
              text-white 
              transition-transform 
              duration-300 
              active:opacity-50 
              md:hover:scale-[102.5%]`}
        >
          {loading ? "Processing" : success ? "Subscribed" : "Join waitlist"}
        </button>
      </form>
      {showError && (
        <div className="mt-2 text-lg text-red-400">
          The email is not well formed
        </div>
      )}
      {error && "Subscription failed"}
    </div>
  );
}
