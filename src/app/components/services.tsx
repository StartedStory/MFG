"use client";
import { useEffect } from "react";
import Image from "next/image";
import "../bg.css";

export default function Services() {
  return (
    <div className="flex-col w-full bg-[#f8f9fa] items-center justify-center flex pb-12 mt-0 xl:mt-32">
      <div className="flex flex-col space-y-4  text-center justify-center">
        <div className="mt-10  flex items-end gap-3 text-secondary justify-center">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase font-bold">Our products</h2>
        </div>
        <div id="text" className="">
          <h3 className="text-center justify-center font-bold text-3xl ">
            Our Products By Range
          </h3>
        </div>
      </div>
      <div
        id="services-section"
        className="grid grid-cols-1 z-10 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3  grid-rows-2 bg-transparent w-full  gap-7 p-12 max-w-7xl"
      >
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">Mediphon</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service2.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>

            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">Medilam</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service3.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>

            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">Mediclear</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service4.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">MediSnow</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service5.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>

            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">MediReflect</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-12 object-fill overflow-hidden group cursor-default hover:bg-secondary bg-white hover:text-white shadow-md shadow-gray-300/50">
          <div className=" overflow-hidden  relative leading-[0rem] z-10">
            <Image
              src="/assets/img/Home/service6.webp"
              height={400}
              width={578}
              alt="Ok"
              className="h-96 w-auto object-cover relative mx-auto mt-0 sm:mt-12 md:mt-0"
            ></Image>

            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
              className="h-12 absolute bottom-0 rotate-180 w-full text-white  group-hover:text-secondary group-hover:fill-secondary"
            >
              <path d="M1200 0L0 0 892.25 114.72" fill="currentColor"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 z-10 ">
            <h2 className="uppercase text-2xl font-semibold">Medilam Coloré</h2>
            <p className="text-center max-w-xs text-lg font-light  mx-12 ">
              The customer is very important, the customer will be followed by
              the customer. Intrepidly from the hospital in the valley and that
              hospital. I&apos;m sorry.
            </p>
            <a
              href=""
              className="hover:text-white  text-lg transition-all easy-in hover:transform hover:scale-125"
            >
              Read More <span className="">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
