"use client";
import Image from "next/image";

export default function Oursite() {
  return (
    <div className="relative w-full flex overflow-hidden">
      <div className="grid w-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 mx-auto max-w-7xl h-screen items-center">
        <div
          id="text"
          className="z-20 justify-center flex flex-col items-center"
        >
          <div
            id="text"
            className=" space-y-3 items-center md:items-start flex flex-col"
          >
            <div className="mt-10 flex items-end gap-3 text-white space-y-2">
              <hr className="mb-1 border-b-2 border-[#0054a7] w-24"></hr>
              <h2 className="uppercase  font-bold">Nostre Site</h2>
            </div>
            <h3 className="text-center md:text-left text-3xl max-w-lg font-bold text-white">
              DÉCOUVREZ MEDITERRANEAN GLASS PERFORMANCE SYSTEM
            </h3>
            <p className="max-w-md md:max-w-lg text-white font-thin">
              Gagnez du temps, en productivité et en autonomie grâce à MGPS.
              Plus besoin de contacter notre service technique pour configurer
              la composition de vos vitrages, faites-le vous-mêmes sur notre
              site à tout moment ! Il suffit de vous inscrire, choisir la
              composition de votre vitrage et ensuite cliquer sur « calculer »
              pour obtenir une fiche technique téléchargeable complète et
              détaillée.
            </p>
            {/* Button */}
            <div className="mx-2 py-6 self-start ml-10 md:ml-2">
              <button className="group relative bg-[#0054a7] hover:bg-primary py-3 px-6 text-white outline-none  focus:bg-[#0054a7]">
                <span
                  className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-[#0054a7] group-hover:border-primary group-focus:border-primary"
                  aria-hidden="true"
                ></span>
                <span className="uppercase font-bold">Consulter</span>
                <span
                  className="absolute -bottom-2 -end-2 block h-5 w-5 rotate-180 border-s-4 border-t-4 border-[#0054a7] group-hover:border-primary group-focus:border-[#0054a7]"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile" className="z-20  select-none flex justify-center c">
          <Image
            className="h-auto w-52 lg:w-80"
            src={"/assets/img/mobile.png"}
            alt="Mobile MFG"
            height={600}
            width={350}
          ></Image>
        </div>

        <div
          className="z-10 h-96 min-h-full w-full left-0 top-0 absolute bg-cover"
          style={{ backgroundImage: "url('/assets/img/glass-windows.png')" }}
        ></div>
      </div>
      <div className="absolute z-10 right-0 inset-y-0 overflow-clip ">
        <svg  className="mt-80 md:lg-mt-60 lg:mt-0" xmlns="http://www.w3.org/2000/svg" width="1489px" height="1357px">
          <path
            fill-rule="evenodd"
            opacity="0.851"
            fill="rgb(0, 176, 240)"
            d="M1808.934,0.501 L2588.437,285.678 L788.745,1356.512 L0.382,1052.585 L1808.934,0.501 Z"
          />
        </svg>
      </div>
    </div>
  );
}
