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

const About = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", swiperParams);
  }, []);
  return (
    <div className="flex relative mt-12">
      <div
        id="about-section"
        className="grid bg-white px-7 xl:px-10 2xl:px-20 py-10 grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 mx-auto"
      >
        {/* Text stuffs */}
        <div className="flex flex-col space-y-4 container ml-5 md:ml-6 lg:ml-10">
          <div className="mt-2 flex justify-start items-end gap-3 text-secondary w-full">
            <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
            <h2 className="uppercase font-Poppins font-bold">ABOUT US</h2>
          </div>
          <div id="text" className="">
            <h3 className="text-left font-bold font-Montserrat text-3xl xl:text-5xl">
              Elevating glass innovations globally
            </h3>
            <p className="text-gray-600 mt-5 xl:mt-10 text-sm xl:text-lg font-Poppins leading-8">
              Mediterranean Float Glass (MFG SPA), a subsidiary of the CEVITAL
              group, was created in 2007 and is led by a team of young talents
              dedicated to progress and development. Today, MFG is one of
              Africa&apos;s leading glass producers. Located in Arbâa, Wilaya of
              Blida, just 32 km from the port of Algiers, the head office and
              factory cover an area of ​​30 hectares.
            </p>
            <p className="text-gray-600 mt-3 xl:mt-10 text-sm xl:text-lg font-Poppins leading-8">
              In its first year of existence, MFG transformed Algeria from an
              exclusive importer of flat glass to an exporter, satisfying more
              than 90% of local demand. Beyond Algeria, MFG serves international
              markets, particularly in the Maghreb and Southern Europe, with
              notable expansion thanks to a second float line in 2017.
            </p>
          </div>

          {/* Features */}

          <div className="hidden lg:flex">
            <div className="flex justify-center items-center my-4 gap-5">
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
                  <span className="text-buttonColor font-Poppins text-lg xl:text-2xl font-bold uppercase">
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
                  <span className="text-buttonColor font-Poppins text-lg xl:text-2xl font-bold uppercase">
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
                  <span className="text-buttonColor font-Poppins text-lg xl:text-2xl font-bold uppercase">
                    EXPORT
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
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
                    <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
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
                    <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
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
                    <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
                      EXPORT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="relative p-auto md:p-6 md:pl-0 transform lg:w-full order-first flex-1">
          <div id="images" className="w-full h-full justify-end">
            <Image
              src="/assets/img/about2.png"
              alt="Building"
              width={300}
              height={300}
              className="absolute z-20"
            />
            <div>
              <Image
                src="/assets/img/about1.png"
                alt="Building"
                width={300}
                height={300}
                className="absolute z-40 mx-40 my-40 md:mx-16 md:my-16 lg:mx-40 lg:my-40 w-72"
              />
              <div>
                <Image
                  src="/assets/img/dots.png"
                  alt="Building"
                  width={400}
                  height={400}
                  className="absolute mx-28 mt-[14rem] md:mx-16 md:mt-[8rem] lg:mx-40 lg:my-40 w-80"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:flex lg:hidden">
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
                  <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
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
                  <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
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
                  <span className="text-buttonColor font-Poppins text-2xl font-bold uppercase">
                    EXPORT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
