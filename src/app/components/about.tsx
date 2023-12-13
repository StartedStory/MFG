"use client";
import { useEffect } from "react";
import Image from "next/image";

// Import Swiper dynamically
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Configure Swiper
const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 2,
  modules: [Navigation, Pagination, Autoplay],
  effect: "flip",

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
};

export default function About() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", swiperParams);
  }, []);
  return (
    <div
      id="about-section"
      className="grid mb-10 lg:mb-32 bg-white py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto"
    >
      {/* Text stuffs */}
      <div className="flex flex-col space-y-4 container w-full mx-auto">
        <div className="mt-10 flex justify-center md:justify-start items-end gap-3 text-secondary">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase  font-bold">ABOUT US</h2>
        </div>
        <div id="text" className="">
          <h3 className="mx-12 md:mx-0 text-center md:text-left font-bold text-3xl">
            Elevating glass innovation globally
          </h3>
          <p className="mx-16 md:mx-0 text-gray-600 mt-3">
            At Mediterranean Float Glass (MFG), we have established ourselves as
            a leader in the glass industry, offering an extensive and diverse
            range of high-quality glass products. With an unwavering commitment
            to excellence, we are committed to meeting to the demands of
            national and international markets.
          </p>
        </div>

        {/* Features */}

        <div className="hidden md:flex ">
          <div className="grid md:grid-cols-1 xl:grid-cols-3 my-4 gap-5  ">
            <div className="">
              <div className="flex items-center gap-2 justify-center">
                <div className=" border border-blue-700 rounded-full p-1 w-16 h-16">
                  <Image
                    src="/assets/img/quality2.png"
                    alt="Building"
                    width={72}
                    height={72}
                    className="bg-primary rounded-full p-3"
                  ></Image>
                </div>
                <span className="text-[#242424] text-xl font-semibold uppercase">
                  QUALITY
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2  justify-center">
                <div className=" border border-blue-700 rounded-full flex p-1 w-16 h-16">
                  <Image
                    src="/assets/img/batiment.png"
                    alt="Building"
                    width={72}
                    height={72}
                    className="bg-primary rounded-full p-3"
                  ></Image>
                </div>
                <span className="text-[#242424] text-xl font-semibold uppercase">
                  BUILDING
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2  justify-center">
                <div className=" border border-blue-700 rounded-full p-1 w-16 h-16">
                  <Image
                    src="/assets/img/world.png"
                    alt="Building"
                    width={72}
                    height={72}
                    className="bg-primary rounded-full p-3"
                  ></Image>
                </div>
                <span className="text-[#242424] text-xl font-semibold uppercase">
                  EXPORT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="swiper max-w-full  flex-col items-center justify-center relative ">
            <div className="swiper-wrapper items-center flex-row my-4 ">
              <div className="swiper-slide">
                <div className="flex items-center gap-2  justify-center">
                  <div className=" border border-blue-700 rounded-full p-1 w-20 h-20">
                    <Image
                      src="/assets/img/quality2.png"
                      alt="Building"
                      width={72}
                      height={72}
                      className="bg-primary rounded-full p-4"
                    ></Image>
                  </div>
                  <span className="text-[#242424] text-xl font-semibold uppercase">
                    QUALITY
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="flex items-center gap-2  justify-center">
                  <div className=" border border-blue-700 rounded-full flex p-1 w-20 h-20">
                    <Image
                      src="/assets/img/batiment.png"
                      alt="Building"
                      width={72}
                      height={84}
                      className="bg-primary rounded-full p-4"
                    ></Image>
                  </div>
                  <span className="text-[#242424] text-xl font-semibold uppercase">
                    BUILDING
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="flex items-center gap-2  justify-center">
                  <div className=" border border-blue-700 rounded-full p-1 w-20 h-20">
                    <Image
                      src="/assets/img/world.png"
                      alt="Building"
                      width={72}
                      height={72}
                      className="bg-primary rounded-full p-4"
                    ></Image>
                  </div>
                  <span className="text-[#242424] text-xl font-semibold uppercase">
                    EXPORT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="mx-auto md:mx-2 py-6">
          <button className="group relative bg-secondary hover:bg-[#0e7ceb] py-3 px-6 text-white outline-none  focus:bg-secondary">
            <span
              className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-[#0e7ceb]"
              aria-hidden="true"
            ></span>
            <span className="uppercase font-bold">Read more</span>
            <span
              className="absolute -bottom-2 -end-2 block h-5 w-5 rotate-180 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-secondary"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
      {/* Image section */}
      <div className="hidden md:flex relative p-6 w-56 transform  lg:w-full md:order-first flex-1 ">
        <div id="images" className=" w-full h-full justify-end">
          <Image
            src="/assets/img/about2.png"
            alt="Building"
            width={300}
            height={300}
            className="absolute z-20 "
          />
          <div>
            <Image
              src="/assets/img/about1.png"
              alt="Building"
              width={300}
              height={300}
              className="absolute z-40 mx-40 my-40 w-72 "
            />
            <div>
              <Image
                src="/assets/img/dots.png"
                alt="Building"
                width={400}
                height={400}
                className="absolute mx-28 mt-[13rem] w-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex sm:flex-row relative md:hidden mx-12 gap-5 md:mx-0 justify-center">
        <Image
          src="/assets/img/about2.png"
          alt="Building"
          width={300}
          height={300}
          className="w-full sm:w-1/2 h-full"
        />
        <Image
          src="/assets/img/about1.png"
          alt="Building"
          width={300}
          height={300}
          className="w-full sm:w-1/2 h-auto"
        />
      </div>
    </div>
  );
}
