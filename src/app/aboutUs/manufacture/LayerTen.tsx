import Image from "next/image";

const LayerTen = () => {
  return (
    <div className="flex justify-start items-start ml-16 -mt-140">
      <div className="mt-7 ml-14 max-w-lg">
        <div className="uppercase text-productionColorTo text-center font-Poppins text-2xl font-semibold leading-8">
          Glass Delivery
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          The trailer, equipped with special suspensions and having a specific
          design, receives the desk loaded with glass trays (27 tonnes). The
          assembly is held in position using articulated arms or air cushions.
        </div>
      </div>
      <div className="flex items-center mt-60 ml-65">
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
        src={"/assets/img/manufacture/Layer_10.png"}
        alt="Mobile MFG"
        height={16}
        width={142}
      ></Image>
      <div className="flex items-center mt-M40">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/RLArrow_1.png"}
          alt="Mobile MFG"
          height={16}
          width={142}
        ></Image>
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          10
        </div>
      </div>
    </div>
  );
};

export default LayerTen;
