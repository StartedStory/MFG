"use client";
import { useEffect } from "react";
import Image from "next/image";
import "../bg.css";

const Production = () => {
  return (
    <div className="flex-col w-full bg-white items-center justify-center flex">
      <div className="flex flex-col space-y-4  text-center justify-center">
        <div className="mt-10  flex items-end gap-3 text-secondary justify-center">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase font-Poppins font-semibold text-lg">
            Production
          </h2>
        </div>
        <div id="text" className="">
          <h3 className="w-752 text-center justify-center font-Montserrat font-semibold text-5xl leading-productionLineHeight">
            Rapid Growth and Expansion of Production
          </h3>
        </div>
      </div>

      <div className="w-full h-32 mt-28 mb-16 flex justify-start items-start bg-gradient-to-r from-transparent to-transparent via-productionColorVia">
        <div className="-mt-8 ml-32 pr-10">
          <Image
            alt="random"
            width={100}
            height={100}
            className="w-auto"
            src={"/assets/img/production/2009.svg"}
          ></Image>
          <div className="uppercase mt-8 font-Poppins text-2xl font-semibold text-productionColorVia">
            2009
          </div>
          <div className="font-Poppins text-lg leading-8">
            Introduced a laminated glass line with a daily capacity of 235 tons,
            expanding the production of laminated glass.
          </div>
        </div>
        <div className="-mt-8 pr-10">
          <Image
            alt="random"
            width={100}
            height={100}
            className="w-auto mr-auto"
            src={"/assets/img/production/2010.svg"}
          ></Image>
          <div className="uppercase mt-8 font-Poppins text-2xl font-semibold text-productionColorVia">
            2010
          </div>
          <div className="font-Poppins text-lg leading-8">
            Introduced a laminated glass line with a daily capacity of 235 tons,
            expanding the production of laminated glass.
          </div>
        </div>
        <div className="-mt-8 pr-10">
          <Image
            alt="random"
            width={100}
            height={100}
            className="w-auto mr-auto"
            src={"/assets/img/production/2011.svg"}
          ></Image>
          <div className="uppercase mt-8 font-Poppins text-2xl font-semibold text-productionColorVia">
            2011
          </div>
          <div className="font-Poppins text-lg leading-8">
            Introduced a laminated glass line with a daily capacity of 235 tons,
            expanding the production of laminated glass.
          </div>
        </div>
        <div className="-mt-8 pr-40">
          <Image
            alt="random"
            width={100}
            height={100}
            className="w-auto mr-auto"
            src={"/assets/img/production/2016.svg"}
          ></Image>
          <div className="uppercase mt-8 font-Poppins text-2xl font-semibold text-productionColorVia">
            2016
          </div>
          <div className="font-Poppins text-lg leading-8">
            Introduced a laminated glass line with a daily capacity of 235 tons,
            expanding the production of laminated glass.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
