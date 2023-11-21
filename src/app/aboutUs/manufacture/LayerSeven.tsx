import Image from "next/image";

const LayerSeven = () => {
  return (
    <div className="flex justify-end items-start -mt-130 mr-100">
      <div className="flex items-center mt-M40 -mr-30">
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          7
        </div>
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/LRArrow_1.png"}
          alt="Mobile MFG"
          height={600}
          width={350}
        ></Image>
      </div>
      <Image
        className="w-auto"
        src={"/assets/img/manufacture/Layer_7.png"}
        alt="Mobile MFG"
        height={16}
        width={142}
      ></Image>
      <div className="flex items-center mt-60 -ml-160">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/LRArrow_2.png"}
          alt="Mobile MFG"
          height={16}
          width={121}
        ></Image>
      </div>
      <div className="mt-4 ml-20 max-w-md">
        <div className="uppercase text-productionColorVia text-center font-Poppins text-2xl font-semibold leading-8">
          Control Room
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          Monitoring of the entire line is done at this level via automatic
          fault detection, control of glass thickness and constraints as well as
          optimization of different glass formats.
        </div>
      </div>
    </div>
  );
};

export default LayerSeven;