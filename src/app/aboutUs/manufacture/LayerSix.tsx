import Image from "next/image";

const LayerSix = () => {
  return (
    <div className="flex justify-start items-start ml-16 mt-16">
      <div className="ml-14 max-w-lg">
        <div className="uppercase text-productionColorTo text-center font-Poppins text-2xl font-semibold leading-8">
          Restaurant
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          The hanger allows the glass ribbon to cool under carefully controlled
          conditions. This process releases the internal tensions of the glass
          and maximizes its potential in terms of mechanical resistance.
        </div>
      </div>
      <div className="flex items-center mt-60 ml-3">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_2.png"}
          alt="Mobile MFG"
          height={16}
          width={121}
        ></Image>
      </div>
      
      <div className="flex items-center mt-M40 ml-32">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_1.png"}
          alt="Mobile MFG"
          height={16}
          width={142}
        ></Image>
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          6
        </div>
      </div>
    </div>
  );
};

export default LayerSix;
