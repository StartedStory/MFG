import Image from "next/image";

const LayerNine = () => {
  return (
    <div className="flex justify-end items-start -mt-145 mr-80">
      <div className="flex items-center mt-M40 -mr-30">
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          9
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
        src={"/assets/img/manufacture/Layer_9.png"}
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
          Vacuum Lifts
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          This system allows glass trays to be stacked directly on racks so that
          they can then be stored and shipped.
        </div>
      </div>
    </div>
  );
};

export default LayerNine;
