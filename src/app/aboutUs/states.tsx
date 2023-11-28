"use client";

import Image from "next/image";
import CountUp from "react-countup";

const States = () => {
  const videoSource = "assets/video/MFG2021.mp4";
  // const videoSource = "";
  return (
    <div className="h-S1000 sm:h-784 flex flex-col sm:flex sm:flex-row relative w-full items-end justify-center pb-10">
      {/* <div className="absolute z-50 -top-52 bg-black opacity-20 w-972 h-554"></div> */}
      <div className="z-40 absolute -top-72 sm:-top-52 w-full px-10 lg:px-0 lg:w-972 h-554">
        <video autoPlay loop muted className="w-full h-full">
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-10 lg:grid-cols-4 gap-10 sm:gap-16 lg:gap-24 2xl:gap-40 justify-center items-center mt-48 mx-auto">
        <div className="z-40 sm:border-r-sky-500 lg:border-r-2 flex justify-center items-center">
          <div className="h-auto w-48 flex flex-col justify-center items-center text-center">
            <div className="h-auto w-16">
              <Image
                src={"/assets/img/stats-deal.png"}
                alt="stats"
                height={60}
                width={70}
                className="h-18 w-32 z-20"
              ></Image>
            </div>
            <div className="flex flex-col text-4xl font-bold text-sky-500 mt-8">
              <CountUp end={850} duration={7}></CountUp>
              <span className="text-base font-semibold text-white text-center">
                Collaborators
              </span>
            </div>
          </div>
        </div>
        <div className="z-40 sm:border-r-sky-500 lg:border-r-2 flex justify-center items-center">
          <div className="h-auto w-48 flex flex-col justify-center items-center text-center">
            <div className="h-auto w-16">
              <Image
                src={"/assets/img/stats-awareness.png"}
                alt="stats"
                height={80}
                width={80}
                className="h-16 w-64 z-20"
              ></Image>
            </div>
            <div className="flex flex-col text-4xl font-bold text-sky-500 mt-8">
              <CountUp end={14} duration={10}></CountUp>
              <span className="text-base font-semibold text-white text-center">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
        <div className="z-40 sm:border-r-sky-500 lg:border-r-2 flex justify-center items-center">
          <div className="h-auto w-48 flex flex-col justify-center items-center text-center">
            <div className="h-auto w-16">
              <Image
                src={"/assets/img/stats-glass.png"}
                alt="stats"
                height={80}
                width={80}
                className="h-16 w-64 z-20"
              ></Image>
            </div>
            <div className="flex flex-col text-4xl font-bold text-sky-500 mt-8">
              <CountUp end={173162} duration={5}></CountUp>
              <span className="text-base font-semibold text-white text-center">
                Tons Sold in 2019
              </span>
            </div>
          </div>
        </div>
        <div className="z-40 flex justify-center items-center">
          <div className="h-auto w-48 flex flex-col justify-center items-center text-center">
            <div className="h-auto w-16">
              <Image
                src={"/assets/img/stats-support.png"}
                alt="stats"
                height={80}
                width={80}
                className="h-16 w-64 z-20"
              ></Image>
            </div>
            <div className="flex flex-col text-4xl font-bold text-sky-500 mt-8">
              <CountUp end={52} duration={10}></CountUp>
              <span className="text-base font-semibold text-white text-center px-3">
                Training for the benefit of employees
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 absolute backdrop-blur-sm backdrop-opacity-90  top-0 bg-black/80 h-S1000 sm:h-784 w-full"></div>
      <div className="z-10 h-S1000 sm:h-784 w-full left-0 top-0 absolute bg-cover bg-states-landing"></div>
    </div>
  );
};

export default States;
