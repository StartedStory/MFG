import Image from "next/image";

const Distribution = () => {
  return (
    <div className="relative w-full flex overflow-hidden">
      <div className="grid w-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 mx-24 my-24 items-center">
        <div
          id="text"
          className="z-20 justify-center flex flex-col items-center"
        >
          <div
            id="text"
            className="space-y-3 items-center md:items-start flex flex-col"
          >
            <div className="mt-10 flex items-end gap-3 space-y-2">
              <hr className="mb-1 border-b-2 border-[#0054a7] w-24"></hr>
              <h2 className="uppercase text-productionColorTo text-lg font-semibold">
                Distribution Efficace
              </h2>
            </div>
            <h3 className="text-center md:text-left text-5xl font-bold text-buttonColor leading-productionLineHeight">
              Discover Excellence with editerranean Float Glass
            </h3>
            <p className="mt-9 max-w-md md:max-w-lg text-black font-thin">
              Our distribution network goes beyond simple proximity, promoting
              harmonious collaboration between our teams. This synergy is
              essential to ensure the quality and precision of our responses,
              careful monitoring of the supply chain and unwavering consistency
              in production.
            </p>
            <p className="mt-9 max-w-md md:max-w-lg text-black font-thin">
              At Mediterranean Float Glass, we are committed to delivering
              excellence. Discover your dedicated distributor today to access
              our world-class glass solutions. We are with you every step of the
              way, ensuring that your needs are met with the utmost reliability
              and satisfaction.
            </p>
            {/* Button */}
            <div className="mx-2 py-6 self-start ml-10 md:ml-2">
              <button className="group relative bg-[#0054a7] hover:bg-primary py-3 px-6 text-white outline-none  focus:bg-[#0054a7]">
                <span
                  className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-[#0054a7] group-hover:border-primary group-focus:border-primary"
                  aria-hidden="true"
                ></span>
                <span className="uppercase font-bold">Contact now</span>
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
            className="w-auto"
            src={"/assets/img/distribution/distribution_background.png"}
            alt="Mobile MFG"
            height={600}
            width={350}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
