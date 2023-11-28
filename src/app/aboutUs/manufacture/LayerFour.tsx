import Image from "next/image";

const LayerFour = () => {
  return (
    <div className="flex justify-start items-start mt-11 ml-24">
      <div className="mt-7 ml-14 max-w-lg">
        <div className="uppercase text-productionColorTo text-center font-Poppins text-2xl font-semibold leading-8">
          Melt Furnace
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          The oven, built from refractory bricks, can contain up to 2,000 tonnes
          of glass melted at 1,550°C.
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
          4
        </div>
      </div>
    </div>
  );
};

export default LayerFour;
