import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const caseTypeData = [
  { name: "Title Case", value: "capitalize" },
  { name: "Sentence case", value: "Sentence case" },
  { name: "lower case", value: "lowercase" },
  { name: "UPPER CASE", value: "uppercase" },
  { name: "AlT CaSe", value: "AlT CaSe" },
  { name: "tOGGLE", value: "tOGGLE" },
];

export default function index() {
  const [text, setText] = useState("");
  const [caseType, setCaseType] = useState("capitalize");

  useEffect(() => {
    const newText = text;

    if (caseType === "Sentence case") {
      const formattedText =
        newText.charAt(0).toUpperCase() + newText.slice(1).toLowerCase();

      setText(formattedText);
    } else if (caseType === "capitalize") {
      const formattedText = newText
        .toLowerCase()
        .replace(/(?:^|\s)\w/g, function (match) {
          return match.toUpperCase();
        });
      setText(formattedText);
    } else if (caseType === "uppercase") {
      const formattedText = newText.toUpperCase();
      setText(formattedText);
    } else if (caseType === "lowercase") {
      const formattedText = newText.toLowerCase();
      setText(formattedText);
    } else if (caseType === "AlT CaSe") {
      let formattedText = "";
      for (let i = 0; i < newText.length; i++) {
        if (i % 2 === 0) {
          formattedText += newText[i].toUpperCase();
        } else {
          formattedText += newText[i].toLowerCase();
        }
      }
      setText(formattedText);
    } else if (caseType === "tOGGLE") {
      let formattedText = "";
      for (let i = 0; i < newText.length; i++) {
        let char = newText[i];
        formattedText +=
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }
      setText(formattedText);
    } else setText(newText);
  }, [caseType]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Title Capitalization Tool : Title Case Converter</title>
        <meta
          content="Transform your titles instantly! Discover the best Title Capitalization and title case converter Tool to convert a Title Case effortlessly."
          name="description"
        />
      </Head>
      <div className="pt-[20px] pb-[50px]">
        <div
          className="w-[95%] md:w-[85%] xl:w-[70%] mx-auto bg-white rounded-[4px] relative shadow-lg"
          style={{ border: "1px solid rgb(226 232 240)" }}
        >
          <div
            className="w-[100%]"
            style={{
              borderRight: "1px solid rgb(226 232 240)",
              position: "relative",
            }}
          >
            <textarea
              name="content"
              value={text}
              placeholder="Type/Paste Your Title Here to Capitalize It"
              style={{
                width: "100%",
                height: "450px",
                padding: "20px",
                fontSize: "16px",
              }}
              onChange={(e) => {
                const newText = e.target.value;

                if (caseType === "Sentence case") {
                  const formattedText =
                    newText.charAt(0).toUpperCase() +
                    newText.slice(1).toLowerCase();

                  setText(formattedText);
                } else if (caseType === "capitalize") {
                  const formattedText = newText
                    .toLowerCase()
                    .replace(/(?:^|\s)\w/g, function (match) {
                      return match.toUpperCase();
                    });
                  setText(formattedText);
                } else if (caseType === "uppercase") {
                  const formattedText = newText.toUpperCase();
                  setText(formattedText);
                } else if (caseType === "lowercase") {
                  const formattedText = newText.toLowerCase();
                  setText(formattedText);
                } else if (caseType === "AlT CaSe") {
                  let formattedText = "";
                  for (let i = 0; i < newText.length; i++) {
                    if (i % 2 === 0) {
                      formattedText += newText[i].toUpperCase();
                    } else {
                      formattedText += newText[i].toLowerCase();
                    }
                  }
                  setText(formattedText);
                } else if (caseType === "tOGGLE") {
                  let formattedText = "";
                  for (let i = 0; i < newText.length; i++) {
                    let char = newText[i];
                    formattedText +=
                      char === char.toUpperCase()
                        ? char.toLowerCase()
                        : char.toUpperCase();
                  }
                  setText(formattedText);
                } else setText(newText);
              }}
            ></textarea>

            <div
              className="lg:flex gap-[50px] py-[15px] px-[25px]"
              style={{ borderTop: "2px solid rgb(226 232 240)" }}
            >
              <div className="flex items-center gap-[7px]">
                <div
                  className="cursor-pointer max-lg:mb-3"
                  onClick={handleCopyClick}
                >
                  <i className="fa-solid fa-clipboard text-[30px] opacity-60"></i>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {caseTypeData?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCaseType(item?.value);
                      toast.success("Case updated");
                      // localStorage.setItem("activeCaseType", item?.value);
                    }}
                    style={{
                      fontSize: "15px",
                      fontWeight: "800",
                      padding: "7px 10px",
                      backgroundColor:
                        item?.value === caseType ? "rgb(232 234 235)" : "",
                      border: "1px solid rgb(226 232 240)",
                      borderRadius: "4px",
                      opacity: "0.7",
                    }}
                    className="max-sm:w-[48%]"
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
