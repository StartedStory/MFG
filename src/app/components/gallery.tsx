"use client";

import Image from "next/image";

export default function stats() {
  return (
    <div className="p-4 max-w-7xl mx-auto bg-white py-12">
      <div className="px-6  flex flex-col lg:mx-row">
        <div className="flex flex-col justify-center  w-full items-center pb-12">
          <div className="mt-10 flex justify-center items-end gap-3 text-secondary">
            <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
            <h2 className="uppercase  font-bold">Nos Projets Clés</h2>
          </div>

          <div
            id="text"
            className="justify-center flex items-center text-center "
          >
            <h3 className="text-3xl max-w-sm font-bold">
              Nos projets complets sélectionnés
            </h3>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row ">
        <ul className="py-6 font-medium space-y-2 w-96 px-8 lg:px-0">
          <li className="before:content-['—'] before:text-gray-300 text-secondary">
            <span className="px-2">Intériur</span>
          </li>
          <li className="before:content-['—'] before:text-gray-300">
            <span className="px-2">Extériur</span>
          </li>
          <li className="before:content-['—'] before:text-gray-300">
            <span className="px-2">Sol</span>
          </li>
          <li className="before:content-['—'] before:text-gray-300">
            <span className="px-2">Industrie</span>
          </li>
          <li className="before:content-['—'] before:text-gray-300">
            <span className="px-2">Marché</span>
          </li>
        </ul>

        <div className="columns-2 md:columns-3 lg:columns-4  max-w-7xl  mx-auto">
          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/1?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/2?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/3?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/4?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/5?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/6?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>

          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/7?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>
          <div className="group relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              alt="random"
              width={700}
              height={500}
              className="w-full"
              src={"https://source.unsplash.com/random/8?architecutre,glass"}
            ></Image>
            <div className="test__body  absolute inset-0 p-4 text-white group-hover:transition group-hover:flex flex-col hidden  ">
              <div className="relative bg-black/60 backdrop-opacity-75 h-full group-hover:cursor-pointer items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="test__author font-sm font-medium  text-xl text-center">
                  Médiathèque de Millau, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
