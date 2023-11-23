import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col h-300 relative">
        <div className="absolute z-20 h-300 w-full left-0 top-0 bg-cover bg-landingImgColor opacity-60"></div>
        <div className="absolute z-10 h-300 w-full left-0 top-0 bg-cover bg-tools-download"></div>
        <div className="uppercase text-toolsLandingColor w-1/3 xl:w-1/6 p-0 2xl:p-5">
          <div className="mx-auto absolute z-50 flex justify-center items-center w-full py-32">
            <h1 className="text-white text-5xl font-bold font-Montserrat">
              Glass Enters A New Era
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-toolsNavColor uppercase font-Montserrat text-productionColorTo px-32 py-7">
        <div>Tools and download</div>
        <div>Welcome {">"} Tools and Download</div>
      </div>
    </div>
  );
};

export default Hero;
