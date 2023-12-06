"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "../../../ServerActions";
import { useRef, useState } from "react";

const Main = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  return (
    <div className="flex flex-col lg:flex lg:flex-row justify-between items-center mx-50 xl:mx-60 2xl:mx-64 mt-20 mb-64">
      <div className="mt-20 mr-10 mb-20 lg:mb-0 w-2/3 lg:w-1/2">
        <div className="text-5xl font-Poppins font-medium">Contact Us</div>
        <div className="mt-20">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department email you&apos;d like to contact below.
        </div>
      </div>
      <div className="px-3 py-10 rounded overflow-hidden shadow-xl">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-5">
            <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
              <label
                htmlFor="firstName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <div className="w-full px-3">
              <label
                htmlFor="textarea"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                What can we help you with?
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="textarea"
                rows={3}
              />
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap px-3">
            <ReCAPTCHA
              sitekey={process.env.siteKey}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
            />
            <button
              type="button"
              className="mt-5 sm:mt-0 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
