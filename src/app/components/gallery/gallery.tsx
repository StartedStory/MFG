"use client";

import React, { useState } from "react";
import Oran from "./oran";
import Imprimerie from "./imprimerie";
import Ooredoo from "./ooredoo";
import Sotexham from "./sotexham";
import Renault from "./renault";
import Residence from "./residence";
import Sba from "./sba";
import Medecine from "./medecine";

export default function stats() {
  const [tabNumber, setTabNumber] = useState(1);

  const tabClick = (id: number) => {
    setTabNumber(id);
  };

  return (
    <div className="px-20 mx-auto bg-white py-12">
      <div className="px-10 w-full flex flex-col lg:mx-row">
        <div className="flex flex-col justify-center  w-full items-center pb-12">
          <div className="mt-10 flex justify-center items-end gap-text-cyan-500">
            <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
            <h2 className="uppercase  font-bold">Our Key Projects</h2>
          </div>
          <div
            id="text"
            className="justify-center flex items-center text-center "
          >
            <h3 className="text-3xl max-w-sm font-bold">
              Our selected complete projects
            </h3>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row">
        <div className="flex flex-col gap-5">
          <button
            onClick={() => tabClick(1)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 1 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">Daira d&apos;Oran</p>
          </button>
          <button
            onClick={() => tabClick(2)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 2 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">Imprimerie le Bouquet</p>
          </button>
          <button
            onClick={() => tabClick(3)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 3 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">Ooredoo les pins</p>
          </button>
          <button
            onClick={() => tabClick(4)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 4 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">ORAN - Sotexham</p>
          </button>
          <button
            onClick={() => tabClick(5)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 5 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">Renault</p>
          </button>
          <button
            onClick={() => tabClick(6)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 6 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">RESIDENCE DES PINS</p>
          </button>
          <button
            onClick={() => tabClick(7)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 7 ? "text-cyan-500" : ""
            }`}
          >
            <p className="w-full flex justify-start">SBA HASNAOUI</p>
          </button>
          <button
            onClick={() => tabClick(8)}
            className={`flex-1 p-2 rounded-md transition-all ${
              tabNumber === 8 ? "text-cyan-500" : ""
            }`}
          >
            Universite de Medecine
          </button>
        </div>

        <div className="w-10/12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 mx-auto">
          <div className={`${tabNumber === 1 ? "flex" : "hidden"}`}>
            <Oran />
          </div>
          <div className={`${tabNumber === 2 ? "flex" : "hidden"}`}>
            <Imprimerie />
          </div>
          <div className={`${tabNumber === 3 ? "flex" : "hidden"}`}>
            <Ooredoo />
          </div>
          <div className={`${tabNumber === 4 ? "flex" : "hidden"}`}>
            <Sotexham />
          </div>
          <div className={`${tabNumber === 5 ? "flex" : "hidden"}`}>
            <Renault />
          </div>
          <div className={`${tabNumber === 6 ? "flex" : "hidden"}`}>
            <Residence />
          </div>
          <div className={`${tabNumber === 7 ? "flex" : "hidden"}`}>
            <Sba />
          </div>
          <div className={`${tabNumber === 8 ? "flex" : "hidden"}`}>
            <Medecine />
          </div>
        </div>
      </div>
    </div>
  );
}
