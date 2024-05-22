import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const companyInfoRef = useRef(null);
  const toolsRef = useRef(null);
  const router = useRouter();
  const currentPath = router.pathname;
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCompanyInfo, setOpenCompanyInfo] = useState(false);
  const [openTools, setOpenTools] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        companyInfoRef.current &&
        !companyInfoRef.current.contains(event.target)
      ) {
        setOpenCompanyInfo(false);
      }
    }

    if (openCompanyInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCompanyInfo]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setOpenTools(false);
      }
    }

    if (openTools) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openTools]);
  return (
    <div
      className="fixed top-0 left-0 right-0 bg-white z-[100]"
      style={{
        borderBottom: "1px solid rgb(226 232 240)",
        boxShadow: "0 0 20px #afafaf4f",
      }}
    >
      <div className="h-[65px] flex items-center justify-between lg:px-[30px] w-[95%] md:w-[85%] mx-auto">
        <div
          className="logo flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="/images/logo.svg" alt="" className="w-[45px] sm:w-[50px]" />
          <h1 className="text-[22px] font-bold">Word Counter</h1>
        </div>

        <div
          className="block md:hidden pr-[10px] cursor-pointer"
          onClick={() => setMobileMenu(true)}
        >
          <i className="fa-solid fa-bars text-[25px]"></i>
        </div>

        <div className="hidden gap-[40px] md:flex">
          <div class="relative inline-block text-left">
            <div onClick={() => setOpenTools(!openTools)}>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Tools
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              ref={toolsRef}
              style={{ display: openTools ? "block" : "none" }}
            >
              <div class="py-1 flex flex-col" role="none">
                <button
                  className="text-[15px] hover:text-[blue] p-[7px] px-4 text-left"
                  style={{
                    color:
                      currentPath === "/title-case-converter" ? "blue" : "",
                  }}
                  onClick={() => {
                    router.push("/title-case-converter");
                    setOpenTools(false);
                  }}
                >
                  Case Converter
                </button>
              </div>
            </div>
          </div>
          <div class="relative inline-block text-left">
            <div onClick={() => setOpenCompanyInfo(!openCompanyInfo)}>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Company Info
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              ref={companyInfoRef}
              style={{ display: openCompanyInfo ? "block" : "none" }}
            >
              <div class="py-1 flex flex-col" role="none">
                <button
                  className="text-[15px] hover:text-[blue] p-[7px] px-4 text-left"
                  style={{ color: currentPath === "/about-us" ? "blue" : "" }}
                  onClick={() => {
                    router.push("/about-us");
                    setOpenCompanyInfo(false);
                  }}
                >
                  About
                </button>

                <button
                  className="text-[15px] hover:text-[blue] p-[7px] px-4 text-left"
                  style={{ color: currentPath === "/faqs" ? "blue" : "" }}
                  onClick={() => {
                    router.push("/faqs");
                    setOpenCompanyInfo(false);
                  }}
                >
                  FAQ
                </button>

                <button
                  className="text-[15px] hover:text-[blue] p-[7px] px-4 text-left"
                  style={{
                    color: currentPath === "/privacy-policy" ? "blue" : "",
                  }}
                  onClick={() => {
                    router.push("/privacy-policy");
                    setOpenCompanyInfo(false);
                  }}
                >
                  Privacy Policy
                </button>

                <button
                  className="text-[15px] hover:text-[blue] p-[7px] px-4 text-left"
                  style={{ color: currentPath === "/contact" ? "blue" : "" }}
                  onClick={() => {
                    router.push("/contact");
                    setOpenCompanyInfo(false);
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed top-[0] bg-[black] w-[100%] bottom-[0] left-0 bg-[black]"
          style={{
            opacity: mobileMenu ? "0.2" : "0",
            transition: "0.3s all",
            visibility: mobileMenu ? "visible" : "hidden",
          }}
          onClick={() => setMobileMenu(false)}
        ></div>
        <div
          className="fixed top-[0] bg-[white] w-[50%] bottom-[0]"
          style={{
            right: mobileMenu ? "0" : "-200%",
            transition: "0.3s all",
            opacity: mobileMenu ? "1" : "0",
          }}
        >
          <div className="flex flex-col items-end pr-[10px]">
            <button
              className="text-[15px] hover:text-[blue] p-[10px] pt-[20px]"
              onClick={() => setMobileMenu(false)}
            >
              <i className="fa-solid fa-xmark text-[25px]"></i>
            </button>

            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/about-us" ? "blue" : "" }}
              onClick={() => {
                router.push("/title-case-converter");
                setMobileMenu(false);
              }}
            >
              Case Converter
            </button>

            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/about-us" ? "blue" : "" }}
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About
            </button>

            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/faqs" ? "blue" : "" }}
              onClick={() => {
                router.push("/faqs");
                setMobileMenu(false);
              }}
            >
              FAQ
            </button>
            <button
              className="text-[15px] hover:text-[blue]  p-[10px]"
              style={{ color: currentPath === "/privacy-policy" ? "blue" : "" }}
              onClick={() => {
                router.push("/privacy-policy");
                setMobileMenu(false);
              }}
            >
              Privacy Policy
            </button>
            <button
              className="text-[15px] hover:text-[blue]  p-[10px]"
              style={{ color: currentPath === "/contact" ? "blue" : "" }}
              onClick={() => {
                router.push("/contact");
                setMobileMenu(false);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
