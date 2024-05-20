import useScreenHeight from "@/customeHooks/useScreenHeight";
import Head from "next/head";
import React from "react";

export default function index() {
  const screenHeight = useScreenHeight();
  return (
    <>
      <Head>
        <title>FAQS- Count The Word</title>
        <meta content="Find answers fast! Explore our FAQs and see how we count every word to provide comprehensive solutions. Click here for instant help." />
      </Head>
      <div
        className="w-[95%] md:w-[85%] xl:w-[79%] mx-auto pb-[50px]"
        style={{ minHeight: `${screenHeight - 300}px` }}
      >
        <section className="bg-white bd1">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h2 className="mb-8 text-[30px] 	lg:text-[37px] font-bold tracking-tight font-extrabold  ">
              Frequently asked questions (FAQ)
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16   md:grid-cols-2">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What is word counting?
                  </h3>
                  <p className="text-gray-500 ">
                    Word counting is the process of determining the number of
                    words in a text or document. It is commonly used in various
                    fields such as academia, publishing, and digital marketing
                    to assess the length and density of written content.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Why is word counting important?
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Word counting is important for several reasons:
                  </p>

                  <ul className="ml-5">
                    <li className="text-gray-500 mb-2">
                      • Academic writing: Ensures essays, theses, and
                      dissertations meet word count requirements.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Publishing: Helps in determining the length of articles,
                      stories, or books.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • SEO and digital marketing: Assesses content length for
                      search engine optimization.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Legal documents: Ensures documents meet length
                      specifications.
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What is considered a word in word counting?
                  </h3>
                  <p className="text-gray-500">
                    A word is typically defined as any sequence of characters
                    separated by spaces or punctuation. For example, "hello,"
                    "world," and "it's" each count as one word.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Do numbers and symbols count as words?
                  </h3>
                  <p className="text-gray-500 ">
                    Yes, numbers and symbols count as words if they are
                    separated by spaces. For example, "123" is considered a
                    word, and so is "$100".
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How do contractions and hyphenated words count?
                  </h3>
                  <ul className="ml-5">
                    <li className="text-gray-500 mb-2">
                      • Contractions: Typically counted as one word (e.g.,
                      "don't" is one word).
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Hyphenated words: Usually counted as one word, but this
                      can vary based on the context and specific word counting
                      tool used (e.g., "mother-in-law" is one word).
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Do all word processing tools count words the same way?
                  </h3>
                  <p className="text-gray-500 ">
                    No, different tools might have slight variations in how they
                    count words. It’s always a good idea to verify word counts
                    using the specific tool or method required for your
                    particular context.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Can I exclude certain parts of a document from the word
                    count?
                  </h3>
                  <p className="text-gray-500 ">
                    Yes, many word processing tools allow you to select specific
                    parts of a document and count only those sections.
                    Additionally, some advanced tools let you exclude footnotes,
                    endnotes, or specific sections automatically.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How do spaces, punctuation, and formatting affect word
                    count?
                  </h3>
                  <ul className="ml-5">
                    <li className="text-gray-500 mb-2">
                      • Spaces: Do not count as words.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Punctuation: Does not count as words unless it is part
                      of a word (e.g., "it's" is one word).
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Formatting: Bold, italics, and font size do not affect
                      word count.
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Is there a standard word count for certain types of
                    documents?
                  </h3>

                  <p className="text-gray-500 ">
                    Yes, different types of documents have typical word counts.
                    For example:
                  </p>
                  <ul className="ml-5">
                    <li className="text-gray-500 mb-2">
                      • Short stories: Often 1,500 to 7,500 words.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Novels: Usually 60,000 to 100,000 words.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Articles: Vary widely but often between 500 to 2,000
                      words.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Blog posts: Commonly 500 to 1,500 words.
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I improve my word count without adding unnecessary
                    content?
                  </h3>

                  <ul className="ml-5">
                    <li className="text-gray-500 mb-2">
                      • Be descriptive: Add necessary details and descriptions.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Include examples: Provide examples to illustrate points.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Expand on ideas: Fully develop and explain your ideas.
                    </li>
                    <li className="text-gray-500 mb-2">
                      • Review and edit: Remove redundant phrases and clarify
                      statements to ensure every word adds value.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
