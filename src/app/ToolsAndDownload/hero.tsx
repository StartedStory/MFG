import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-around items-center mx-32 2xl:mx-64">
        <div className="uppercase text-toolsLandingColor w-1/3 xl:w-1/6 p-0 2xl:p-5">
          <div className="flex leading-8">
            <div className="font-Montserrat text-lg font-bold">Glass</div>
            <div className="ml-2 font-Montserrat text-lg">Enters A</div>
          </div>
          <div className="font-Poppins text-lg font-bold flex justify-end">
            New Era
          </div>
        </div>
        <div className="px-5">
          <Image
            src="/assets/img/ToolsAndDownload/office.jpg"
            alt="Building"
            width={72}
            height={72}
            className="w-auto"
          ></Image>
        </div>
      </div>
      <div className="flex justify-between bg-toolsNavColor uppercase font-Montserrat text-productionColorTo px-32 py-7 mt-10">
        <div>Tools and download</div>
        <div>Welcome {">"} Tools and Download</div>
      </div>
    </div>
  );
};

export default Hero;
