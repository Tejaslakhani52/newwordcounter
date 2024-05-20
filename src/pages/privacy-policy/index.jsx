import { handleEmailClick } from "@/commonFunction/emailCheck";
import useScreenHeight from "@/customeHooks/useScreenHeight";
import Head from "next/head";
import React from "react";

export default function index() {
  const screenHeight = useScreenHeight();
  return (
    <>
      <Head>
        <title>Privacy Policy- Count The Word</title>
        <meta content="Learn about our privacy policy. Click to see how we count every word to ensure your data is protected and your privacy is our top priority." />
      </Head>
      <div
        className="w-[95%] md:w-[85%] xl:w-[79%] mx-auto pb-[50px]"
        style={{ minHeight: `${screenHeight - 300}px` }}
      >
        <section className="bg-white   bd1">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 className="mb-8 text-[30px] 	lg:text-[37px] font-bold tracking-tight font-extrabold  ">
              Privacy Policy
            </h1>
            <div
              className="grid pt-8 text-left border-t border-gray-200  gap-10   "
              style={{ minHeight: `${screenHeight - 500}px` }}
            >
              <div>
                <p className="text-gray-500">
                  At{" "}
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>
                  , we prioritize the privacy and security of our users. This
                  privacy policy outlines how we collect, use, and protect your
                  personal information when you access our website.
                </p>
              </div>
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  1. Information collection and use
                </h3>
                <p className="text-gray-500 ">
                  We may collect personal information, including but not limited
                  to your name, email address, and browsing activity, to enhance
                  your experience on our platform. This information may be
                  collected when you voluntarily provide it while using our
                  services or through automated means such as cookies and
                  analytics tools. Your information is used to improve our
                  website, personalize your experience, and provide updates
                  about our services.
                </p>
              </div>
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  2. Information sharing
                </h3>
                <p className="text-gray-500 ">
                  we do not sell, trade, or otherwise transfer your personally
                  identifiable information to external parties. However,
                  non-personally identifiable visitor information may be shared
                  with trusted third parties for analysis, marketing, or other
                  purposes.
                </p>
              </div>
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  3. Data protection
                </h3>
                <p className="text-gray-500 ">
                  We employ various security measures to safeguard your personal
                  information. We use encryption, firewalls, and regular
                  security scans to ensure the protection of your data. However,
                  please be aware that no method of online data transmission or
                  storage is completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  4. Cookies
                </h3>
                <p className="text-gray-500 ">
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>{" "}
                  uses cookies to enhance your browsing experience. These
                  cookies help us understand your preferences and tailor our
                  services to suit your needs. you can choose to accept or
                  decline cookies. Most web browsers automatically accept
                  cookies, but you can usually modify your browser settings to
                  decline cookies if you prefer.
                </p>
              </div>{" "}
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  5. Links to third-party sites
                </h3>
                <p className="text-gray-500 ">
                  Our website may contain links to third-party sites. These
                  external sites have separate and independent privacy policies.
                  We have no responsibility or liability for the content and
                  activities of these linked sites. nonetheless, we seek to
                  protect the integrity of our site and welcome any feedback
                  about these sites.
                </p>
              </div>{" "}
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  6. Changes to this privacy policy
                </h3>
                <p className="text-gray-500 ">
                  <a href="https://counttheword.com/" className="text-[blue]">
                    {" "}
                    counttheword.com
                  </a>{" "}
                  reserves the right to update or modify this privacy policy at
                  any time. any changes made will be reflected on this page. By
                  using our website, you agree to accept any revisions made to
                  this policy.
                </p>
              </div>{" "}
              <div>
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  7. Contact Us
                </h3>
                <p className="text-gray-500 ">
                  If you have any questions or concerns regarding this privacy
                  policy, please contact us using the information below.
                </p>

                <p
                  className=" underline my-4 text-[blue]"
                  onClick={handleEmailClick}
                >
                  Counttheword11@gmail.com.
                </p>

                <p className="text-gray-500 ">
                  This privacy policy was updated on 15 MAY 2024.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
