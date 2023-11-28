import Image from "next/image";

const LayerEight = () => {
  return (
    <div className="flex justify-start items-start ml-32 -mt-7">
      <div className="mt-7 ml-3 max-w-lg">
        <div className="uppercase text-productionColorTo text-center font-Poppins text-2xl font-semibold leading-8">
          Cutting System
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          It is used to cut glass into different dimensions, according to the
          desired formats.
        </div>
      </div>
      <div className="flex items-center mt-70">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_2.png"}
          alt="Mobile MFG"
          height={16}
          width={121}
        ></Image>
      </div>

      <div className="flex items-center mt-50 ml-32">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_1.png"}
          alt="Mobile MFG"
          height={16}
          width={142}
        ></Image>
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          8
        </div>
      </div>
    </div>
  );
};

export default LayerEight;
