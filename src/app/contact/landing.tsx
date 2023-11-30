const Landing = () => {
  return (
    <div className="flex flex-col h-300 relative">
      <div className="absolute z-20 h-300 w-full left-0 top-0 bg-cover bg-landingImgColor opacity-30"></div>
      <div className="absolute z-10 h-300 w-full left-0 top-0 bg-center bg-contactLandingImg bg-cover"></div>
      <div className="uppercase text-toolsLandingColor w-1/3 xl:w-1/6 p-0 2xl:p-5">
        <div className="mx-auto absolute z-50 flex justify-center items-center w-full h-full">
          <h1 className="text-white text-5xl font-bold font-Montserrat">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
