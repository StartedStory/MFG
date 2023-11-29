import Image from "next/image";

const Feedbacks = () => {
  return (
    <div className="flex justify-center items-center bg-white h-auto my-20">
      <div
        id="text"
        className=" space-y-6 items-center text-center flex flex-col"
      >
        <div className="mt-10 flex justify-center md:justify-start items-end gap-3 text-secondary">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase  font-bold">Testimony</h2>
        </div>
        <h3 className="text-center text-3xl max-w-lg font-bold text-black">
          Feedback from our satisfied customers
        </h3>
      </div>
    </div>
  );
};

export default Feedbacks;
