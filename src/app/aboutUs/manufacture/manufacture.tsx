import Image from "next/image";
import LayerOne from "./LayerOne";
import LayerTwo from "./LayerTwo";
import LayerThree from "./LayerThree";
import LayerFour from "./LayerFour";
import LayerFive from "./LayerFive";
import LayerSix from "./LayerSix";
import LayerSeven from "./LayerSeven";
import LayerEight from "./LayerEight";
import LayerNine from "./LayerNine";
import LayerTen from "./LayerTen";

const Manufacture = () => {
  return (
    <div>
      <div className="z-20 justify-center flex flex-col items-center mt-24">
        <div className="flex items-end gap-3 space-y-2">
          <hr className="mb-1 border-b-2 border-[#0054a7] w-24"></hr>
          <h2 className="uppercase text-productionColorTo text-lg font-semibold">
            Process float
          </h2>
        </div>
        <h3 className="mt-3 text-center font-Montserrat text-4xl sm:text-5xl font-bold leading-8 sm:leading-productionLineHeight mx-20">
          The Float Glass Manufacturing Process
        </h3>
        <div className="hidden sm:flex text-aboutUs text-center font-Poppins text-lg leading-8 mx-80 mt-7">
          The Float process is the world standard and the newest process in
          glass manufacturing, it is an industry with an uninterrupted and
          supported production line, 24 hours a day, 7 days a week
        </div>
      </div>
      <div className="hidden lg:flex my-24 mx-44 relative">
        <Image
          className="w-auto h-auto mx-auto"
          src={"/assets/img/manufacture/Mask_group.png"}
          alt="Mobile MFG"
          height={600}
          width={350}
        ></Image>

        <LayerOne />
        <LayerTwo />
        <LayerThree />
        <LayerFour />
        <LayerFive />
        <LayerSix />
        <LayerSeven />
        <LayerEight />
        <LayerNine />
        <LayerTen />
      </div>

      <div className="lg:hidden my-24 mx-5 sm:mx-auto max-w-md sm:max-w-lg md:max-w-xl">
        <div className="w-full">
          <Image
            className="w-auto h-auto"
            src={"/assets/img/manufacture/Icon_1.png"}
            alt="Image_one"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorVia text-2xl font-semibold leading-8 mt-5">
            Preparation of raw material
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            Rigorous control is ensured for each raw material before it is put
            into the oven, according to recognized international standards.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto ml-auto"
            src={"/assets/img/manufacture/Icon_2.png"}
            alt="Image_two"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorTo text-2xl font-semibold leading-8 mt-5">
            Preparation of the vitrifiable mixture
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            Composed of all the raw materials used in the manufacture of float
            glass.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto"
            src={"/assets/img/manufacture/Icon_3.png"}
            alt="Image_three"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorVia text-2xl font-semibold leading-8 mt-5">
            Fooking
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            Rigorous control is ensured for each raw material before it is put
            into the oven, according to recognized international standards.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto ml-auto"
            src={"/assets/img/manufacture/Icon_4.png"}
            alt="Image_four"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorTo text-2xl font-semibold leading-8 mt-5">
            Melt furnace
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            The oven, built from refractory bricks, can contain up to 2,000
            tonnes of glass melted at 1,550°C.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto"
            src={"/assets/img/manufacture/Icon_5.png"}
            alt="Image_five"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorVia text-2xl font-semibold leading-8 mt-5">
            Tin bath
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            The glass floats on a bath of molten tin. Toothed wheels at the
            edges of the ribbon propel the glass forward and set the required
            thickness.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto ml-auto"
            src={"/assets/img/manufacture/Icon_6.png"}
            alt="Image_six"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorTo text-2xl font-semibold leading-8 mt-5">
            Restaurant
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            The hanger allows the glass ribbon to cool under carefully
            controlled conditions. This process releases the internal tensions
            of the glass and maximizes its potential in terms of mechanical
            resistance.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto"
            src={"/assets/img/manufacture/Icon_7.png"}
            alt="Image_seven"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorVia text-2xl font-semibold leading-8 mt-5">
            Control room
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            Monitoring of the entire line is done at this level via automatic
            fault detection, control of glass thickness and constraints as well
            as optimization of different glass formats.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto ml-auto"
            src={"/assets/img/manufacture/Icon_8.png"}
            alt="Image_eight"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorTo text-2xl font-semibold leading-8 mt-5">
            Cutting system
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            It is used to cut glass into different dimensions, according to the
            desired formats.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto"
            src={"/assets/img/manufacture/Icon_9.png"}
            alt="Image_nine"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorVia text-2xl font-semibold leading-8 mt-5">
            Vacuum lifts
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            This system allows glass trays to be stacked directly on racks so
            that they can then be stored and shipped.
          </p>
        </div>
        <div className="w-full mt-12">
          <Image
            className="w-auto h-auto ml-auto"
            src={"/assets/img/manufacture/Icon_10.png"}
            alt="Image_ten"
            height={600}
            width={350}
          ></Image>
          <h3 className="font-Poppins text-productionColorTo text-2xl font-semibold leading-8 mt-5">
            Glass delivery
          </h3>
          <p className="font-Poppins text-aboutUs text-lg leading-7">
            The trailer, equipped with special suspensions and having a specific
            design, receives the desk loaded with glass trays (27 tonnes). The
            assembly is held in position using articulated arms or air cushions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
