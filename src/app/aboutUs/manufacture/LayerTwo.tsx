import Image from "next/image";

const LayerTwo = () => {
  return (
    <div className="flex justify-start items-start ml-16 -mt-140">
      <div className="mt-4 ml-14 max-w-lg">
        <div className="uppercase text-productionColorTo text-center font-Poppins text-2xl font-semibold leading-8">
          Preparation of the vitrifiable mixture
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          Composed of all the raw materials used in the manufacture of float
          glass.
        </div>
      </div>
      <div className="flex items-center mt-50 ml-65 -mr-140">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_2.png"}
          alt="Mobile MFG"
          height={16}
          width={121}
        ></Image>
      </div>
      <Image
        className="w-auto"
        src={"/assets/img/manufacture/Layer_2.png"}
        alt="Mobile MFG"
        height={16}
        width={142}
      ></Image>
      <div className="flex items-center mt-30 -mr-30">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_1.png"}
          alt="Mobile MFG"
          height={16}
          width={142}
        ></Image>
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          2
        </div>
      </div>
    </div>
  );
};

export default LayerTwo;
