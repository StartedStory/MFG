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
      <div className="z-20 justify-center flex flex-col items-center ml-36 mt-24">
        <div className="flex items-end gap-3 space-y-2">
          <hr className="mb-1 border-b-2 border-[#0054a7] w-24"></hr>
          <h2 className="uppercase text-productionColorTo text-lg font-semibold">
            Process float
          </h2>
        </div>
        <h3 className="mt-3 text-center font-Montserrat text-5xl font-bold leading-productionLineHeight mx-470">
          The Float Glass Manufacturing Process
        </h3>
        <div className="text-aboutUs text-center font-Poppins text-lg leading-8 mx-80 mt-7">
          The Float process is the world standard and the newest process in
          glass manufacturing, it is an industry with an uninterrupted and
          supported production line, 24 hours a day, 7 days a week
        </div>
      </div>
      <div className="mt-20 mb-24 mx-44">
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
    </div>
  );
};

export default Manufacture;
