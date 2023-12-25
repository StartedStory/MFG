"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const faqs = [
    {
      question: "What types of glass products are offered by MFG?",
      answer:
        "MFG specializes in a diverse range of high-quality glass products.",
    },
    {
      question: "Is it possible to visit the MFG Showroom?",
      answer:
        "MFG invites you to visit our physical showroom. Details can be found on our 'Contact Us' page. Welcome!",
    },
    {
      question: "Is international purchase of MFG products possible?",
      answer: "",
    },
    {
      question: "Is there a Warranty on MFG glass products?",
      answer: "",
    },
    {
      question: "How does MFG ensure the quality of its products?",
      answer: "",
    },
    {
      question: "Wholesale pricing for MFG products??",
      answer: "",
    },
    {
      question: "Are Customization options available for  glass products?",
      answer: "",
    },
    {
      question: "What is MFG's commitment to sustainability?",
      answer: "",
    },
    {
      question: "What is the Ordering process for MFG products?",
      answer: "",
    },
    {
      question: "Industries using MFG's glass products?",
      answer: "",
    },
  ];
  return (
    <div id="contact-wrapper" className="z-50 py-20 sm:mb-20 relative">
      <div className="flex justify-center items-end gap-3 text-secondary">
        <hr className="mb-1 border-b border-secondary w-12"></hr>
        <h2 className="uppercase font-bold">Having questions?</h2>
      </div>
      <div id="text" className="flex justify-center mt-3">
        <h3 className="text-center text-5xl font-Montserrat font-bold">
          Frequently asked Questions
        </h3>
      </div>
      <dl className="grid grid-cols-12 gap-8 px-20 mt-80 sm:mb-0 mb-320 font-Poppins">
        {faqs.map((faq, index) => (
          <Disclosure
            as="div"
            key={faq.question}
            className={
              index % 2 === 0
                ? "col-start-1 md:col-end-7 col-end-13"
                : "md:col-start-7 col-start-1 col-end-13"
            }
          >
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button
                    className={
                      open
                        ? "flex w-full items-start justify-between bg-productionColorTo text-white shadow-md text-left border border-1 p-6"
                        : "flex w-full items-start justify-between bg-white text-productionColorTo shadow-md text-left border border-1 p-6"
                    }
                  >
                    <span className="text-xl font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 p-6">
                  <p className="text-lg font-normal leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
};

export default Faq;
