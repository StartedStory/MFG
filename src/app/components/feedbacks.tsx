"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
// Import Swiper dynamically
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

interface SliderWithPreviewProps {
  logoImages: string[];
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Feedbacks() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [swiper, setSwiper] = useState<Swiper | null>(null); // Initialize swiper as a state variable

  const logoImages = [
    "/assets/img/feedback-orimex-preview.png",
    "/assets/img/feedback-oxo.png",
  ];

  useEffect(() => {
    // Configure Swiper
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 2,
      modules: [Navigation, Pagination, Autoplay],
      effect: "flip",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 9000,
      },
      on: {
        slideChange: function () {
          setHighlightedIndex(highlightedIndex);
        },
      },
    };

    const swiper = new Swiper(".swiper", swiperParams);
    setSwiper(swiper);
  }, []);
  const handleSliderItemClick = (index: any) => {
    // Highlight the logo preview item
    setHighlightedIndex(index);

    swiper?.slideTo(index, 300);
  };
  return (
    <div className="flex flex-col bg-white h-screen ">
      <div
        id="text"
        className=" space-y-6 items-center text-center flex flex-col"
      >
        <div className="mt-10 flex justify-center md:justify-start items-end gap-3 text-secondary">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase  font-bold">Testimony</h2>
        </div>
        <h3 className="text-center text-3xl max-w-lg font-bold text-black">
          Feedback from our satisfied customers
        </h3>
      </div>
      <div id="feedbacks" className="max-w-7xl flex mx-auto justify-center">
        <div className="swiper flex w-full my-8">
          <div className="swiper-wrapper">
            <div className="swiper-slide  flex-col flex justify-center items-center my-10 space-y-8">
              <div id="feedback-1" className="flex justify-center">
                <p className="text-center max-w-xl">
                  Quality products, short delivery times, a qualified team, the
                  professionalism of MFG allowed us to successfully complete all
                  of our projects.
                </p>
              </div>
              <div id="customer-name" className="flex flex-col items-center">
                <span className="uppercase font-medium">Oxxo</span>
                <span className="text-primary font-bold">Customer</span>
              </div>
              <div
                id="customer-logo"
                className="flex flex-col justify-center items-center"
              >
                <div
                  id="logo-wrapper"
                  className="relative flex p-8 justify-center items-center rounded-full h-32 w-32"
                >
                  <div
                    id="logo-wrapper-2"
                    className="inline-flex bg-white self-center border-8  border-[#cceffc] rounded-full h-32 w-32"
                  >
                    <div className="border-[3px] relative inline-flex  bg-white self-center border-primary rounded-full h-28 w-32"></div>
                    <Image
                      className="absolute p-4"
                      src={"/assets/img/feedback-oxo.png"}
                      fill
                      alt="Orimex Logo"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide flex-col flex justify-center items-center my-10 space-y-8">
              <div id="feedback-2" className="flex justify-center">
                <p className="text-center max-w-xl">
                  Quality products, short delivery times, a qualified team, the
                  professionalism of MFG allowed us to successfully complete all
                  of our projects.
                </p>
              </div>
              <div id="customer-name" className="flex flex-col items-center">
                <span className="uppercase font-medium">ORIMEX</span>
                <span className="text-primary font-bold">Customer</span>
              </div>
              <div
                id="customer-logo"
                className="flex flex-col justify-center items-center"
              >
                <div
                  id="logo-wrapper"
                  className="relative flex p-8 justify-center items-center rounded-full h-32 w-32"
                >
                  <div
                    id="logo-wrapper-2"
                    className="inline-flex bg-white self-center border-8  border-[#cceffc] rounded-full h-32 w-32"
                  >
                    <div className="border-[3px] relative inline-flex  bg-white self-center border-primary rounded-full h-28 w-32"></div>
                    <Image
                      className="absolute p-4"
                      src={"/assets/img/feedback-orimex.png"}
                      fill
                      alt="Orimex Logo"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  px-8 w-64 items-center h-32">
            <div className="p-2 border-gray-500 border swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="logo-preview flex justify-between items-center space-x-4">
              {logoImages.map((image, index) => (
                <div
                  key={index}
                  className="border-8  border-[#cceffc] rounded-full  hover:scale-125 hover:transform"
                  onClick={() => handleSliderItemClick(index)}
                >
                  <img src={image} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="bg-primary p-2 text-white swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
