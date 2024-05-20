import { handleEmailClick } from "@/commonFunction/emailCheck";
import useScreenHeight from "@/customeHooks/useScreenHeight";
import Head from "next/head";
import React from "react";

export default function index() {
  const screenHeight = useScreenHeight();
  return (
    <>
      <Head>
        <title>Contact Us- Count The Word</title>
        <meta content="Have a questions? Contact us and discover how we count every word to provide precise and personalized solutions for you." />
      </Head>
      <div
        className="w-[95%] md:w-[85%] xl:w-[79%] mx-auto pb-[50px]"
        style={{ minHeight: `${screenHeight - 300}px` }}
      >
        <section className="bg-white  bd1">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="mb-8 text-[30px] 	lg:text-[37px] font-bold tracking-tight font-extrabold">
              Contact Us
            </h1>
            <div
              className="grid pt-8 text-left border-t border-gray-200 md:gap-16"
              style={{ minHeight: `${screenHeight - 500}px` }}
            >
              <div>
                <p className="text-gray-500">
                  We would love to hear from you! If you have any questions,
                  suggestions, or just want to say hello, please don't hesitate
                  to reach out to us. You can contact us via email at{" "}
                  <span
                    className="underline cursor-pointer text-[blue]"
                    onClick={handleEmailClick}
                  >
                    {" "}
                    Counttheword11@gmail.com{" "}
                  </span>
                  We promise to get back to you as soon as possible. Your
                  feedback is valuable to us as we continue to improve our word
                  counter tool and provide you with the best experience
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
