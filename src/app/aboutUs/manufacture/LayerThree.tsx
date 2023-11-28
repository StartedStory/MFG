import Image from "next/image";

const LayerThree = () => {
  return (
    <div className="flex justify-end items-start mt-10 mr-48">
      <div className="flex items-center mt-M40 -mr-30">
        <div className="w-60 h-60 flex justify-center items-center text-buttonColor font-Poppins text-2xl font-medium leading-8 border-2 border-dashed border-aboutUs rounded-full">
          3
        </div>
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/LRArrow_1.png"}
          alt="Mobile MFG"
          height={600}
          width={350}
        ></Image>
      </div>

      <div className="flex items-center mt-60 ml-32">
        <Image
          className="w-auto"
          src={"/assets/img/manufacture/LRArrow_2.png"}
          alt="Mobile MFG"
          height={16}
          width={121}
        ></Image>
      </div>
      <div className="mt-4 ml-3 max-w-md">
        <div className="uppercase text-productionColorVia text-center font-Poppins text-2xl font-semibold leading-8">
          fooking
        </div>
        <div className="text-buttonColor font-Poppins text-lg leading-8">
          Introduction of the vitrifiable mixture into the melting furnace.
        </div>
      </div>
    </div>
  );
};

export default LayerThree;
