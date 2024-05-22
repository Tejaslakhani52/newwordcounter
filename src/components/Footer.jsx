import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(new Date());
  return (
    <div className="bg-white shadow bd1">
      {/* <div className="mx-auto px-4 w-[95%] md:w-[95%] xl:w-[78%] p-4 md:py-8 ">
        <div className="md:flex sm:items-center sm:justify-between gap-[40px]">
          <div className="md:w-[70%]  w-[100%]">
            <a
              className="flex items-center mb-4 sm:mb-0 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src="/images/logo.svg"
                className="h-8 mr-3 w-[50px] h-[50px]"
                alt="wordcounter logo"
              />
              <h1 className="text-[18px] font-bold">Word Counter</h1>
            </a>
          </div>

          <div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 max-md:mt-5 max-md:pl-[60px]  max-md:pl-[0px]">
              <li>
                <p
                  className="mr-4 underline md:mr-6 cursor-pointer"
                  onClick={() => router.push("/privacy-policy")}
                >
                  Privacy Policy
                </p>
              </li>
              <li>
                <p
                  className="mr-4 underline md:mr-6 cursor-pointer"
                  onClick={() => router.push("/faqs")}
                >
                  FAQ
                </p>
              </li>

              <li>
                <p
                  className="mr-4 underline md:mr-6 cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </p>
              </li>

              <li>
                <p
                  className=" underline cursor-pointer"
                  onClick={() => router.push("/about-us")}
                >
                  About Us
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {currentYear}{" "}
          <a href="https://counttheword.com/" className="hover:underline">
            counttheword
          </a>
          . All Rights Reserved.
        </span>
      </div> */}

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 flex max-sm:justify-center">
              <a
                className="flex items-center mb-4 sm:mb-0 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <img
                  src="/images/logo.svg"
                  className="h-8 mr-3 w-[50px] h-[50px]"
                  alt="wordcounter logo"
                />
                <h1 className="text-[18px] font-bold">Word Counter</h1>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-[20px] max-sm:px-[30px] sm:gap-[50px] sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Tools
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <p
                      className="mr-4 underline md:mr-6 cursor-pointer"
                      onClick={() => router.push("/privacy-policy")}
                    >
                      Case Converter
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company Info
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <p
                      className="mr-4 underline md:mr-6 cursor-pointer"
                      onClick={() => router.push("/about-us")}
                    >
                      About
                    </p>
                  </li>
                  <li>
                    <p
                      className="mr-4 underline md:mr-6 cursor-pointer"
                      onClick={() => router.push("/faqs")}
                    >
                      FAQ
                    </p>
                  </li>
                  <li>
                    <p
                      className="mr-4 underline md:mr-6 cursor-pointer"
                      onClick={() => router.push("/privacy-policy")}
                    >
                      Privacy Policy
                    </p>
                  </li>
                  <li>
                    <p
                      className="mr-4 underline md:mr-6 cursor-pointer"
                      onClick={() => router.push("/contact")}
                    >
                      Contact
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center">
            © {currentYear}{" "}
            <a href="https://counttheword.com/" className="hover:underline">
              counttheword
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
