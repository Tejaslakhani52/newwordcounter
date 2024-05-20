import { handleEmailClick } from "@/commonFunction/emailCheck";
import useScreenHeight from "@/customeHooks/useScreenHeight";
import Head from "next/head";
import React from "react";

export default function index() {
  const screenHeight = useScreenHeight();
  return (
    <>
      <Head>
        <title>About Count The Word</title>
        <meta
          content="count the word is the best online word and character counter tool to calculate instant words and characters very accurate.
          og title and description is same according meta title and description"
        />
      </Head>
      <div
        className="w-[95%] md:w-[85%] xl:w-[79%] mx-auto pb-[50px]"
        style={{ minHeight: `${screenHeight - 300}px` }}
      >
        <section className="bg-white bd1">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="mb-8 text-[30px] lg:text-[37px] font-bold tracking-tight font-extrabold">
              About Us
            </h1>
            <div
              className="grid pt-8 text-left border-t border-gray-200 gap-10"
              style={{ minHeight: `${screenHeight - 500}px` }}
            >
              <div>
                <h2 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  Our Story
                </h2>
                <p className="text-gray-500">
                  Founded in 2024,
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>{" "}
                  has been at the forefront of tools innovation. What started as
                  a small venture has grown into a leading company, driven by
                  passion, dedication, and a commitment to quality.
                </p>
              </div>
              <div>
                <h2 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  Our Mission
                </h2>
                <p className="text-gray-500">
                  At{" "}
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>
                  , our mission is to empower our clients with solutions that
                  drive success. We believe in fostering a culture of innovation
                  and excellence, ensuring that every product and service we
                  offer meets the highest standards.
                </p>
              </div>
              <div>
                <h2 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  Our Values
                </h2>
                <ul className="ml-5">
                  <li className="text-gray-500 mb-2">
                    • Integrity: We operate with honesty and transparency in
                    everything we do.
                  </li>
                  <li className="text-gray-500 mb-2">
                    • Quality: We are committed to providing products and
                    services that exceed expectations.
                  </li>
                  <li className="text-gray-500 mb-2">
                    • Customer Focus: Our customers are at the heart of our
                    business, and their satisfaction is our top priority.
                  </li>
                  <li className="text-gray-500 mb-2">
                    • Innovation: We embrace change and continuously seek ways
                    to improve and innovate.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 ">
                  What sets{" "}
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>{" "}
                  apart is our unwavering dedication to our customers. We don't
                  just provide solutions; we build lasting relationships based
                  on trust and mutual success. Our team of experts works
                  tirelessly to ensure that you receive personalized service and
                  exceptional results.
                </p>
              </div>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
