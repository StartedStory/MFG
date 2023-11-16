import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col h-300 relative">
      <div className="absolute z-20 h-300 w-full left-0 top-0 bg-cover bg-landingImgColor opacity-60"></div>
      <div className="absolute z-10 h-300 w-full left-0 top-0 bg-cover bg-about-landing"></div>
      <div className="mx-auto absolute z-50 flex justify-center w-full py-12 md:py-32">
        <h1 className="text-white text-5xl max-w-2xl font-bold font-Montserrat">Our Society</h1>
      </div>
    </div>
  );
};

export default Hero;
