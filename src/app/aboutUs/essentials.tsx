import Image from "next/image";

const Essentials = () => {
  return (
    <div className="relative w-full mt-32 lg:mt-48 xl:mt-56">
      <div className="absolute z-0 left-0 top-0 bg-cover bg-essential-landing w-full h-full opacity-2.5"></div>
      <div className="z-10 bg-essentialBackground opacity-95 w-full h-full"></div>
      <div className="flex flex-col md:flex md:flex-row px-12 xl:px-20 2xl:px-36 justify-between mb-72">
        <div className="pt-20 md:pt-36">
          <div className="flex flex-col items-center md:flex md:flex-row">
            <Image
              alt="random"
              width={87}
              height={87}
              className="ml-0 2xl:ml-32 w-1/5 md:w-auto h-full"
              src={"/assets/img/essentials/mission.png"}
            ></Image>
            <div className="ml-5 w-full md:w-2/3">
              <div className="mt-5 md:mt-0 text-buttonColor text-center md:text-left font-Poppins text-2xl font-semibold leading-8">
                Our Mission
              </div>
              <div className="text-aboutUs font-Poppins text-base xl:text-lg leading-6 xl:leading-8">
                In collaboration with our partners, customers and suppliers, our
                perpetual commitment in the field of glass aims for excellence,
                with quality products, a competent team, while preserving the
                environment.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex md:flex-row mt-20">
            <Image
              alt="random"
              width={87}
              height={87}
              className="w-auto h-full"
              src={"/assets/img/essentials/vision.png"}
            ></Image>
            <div className="ml-5 w-full md:w-2/3">
              <div className="mt-5 md:mt-0 text-buttonColor text-center md:text-left font-Poppins text-2xl font-semibold leading-8">
                Our Vision
              </div>
              <div className="text-aboutUs font-Poppins text-base xl:text-lg leading-6 xl:leading-8">
                A leading supplier of glass products and solutions to domestic
                and international markets. An integrator in internal
                development.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex md:flex-row mt-20">
            <Image
              alt="random"
              width={87}
              height={87}
              className="w-auto h-full ml-0 2xl:ml-32"
              src={"/assets/img/essentials/values.png"}
            ></Image>
            <div className="ml-5 w-full md:w-2/3">
              <div className="mt-5 md:mt-0 text-buttonColor text-center md:text-left font-Poppins text-2xl font-semibold leading-8">
                Our Values
              </div>
              <div className="text-aboutUs font-Poppins text-base xl:text-lg leading-6 xl:leading-8">
                Initiative, respect, integrity, solidarity and more particularly
                with teamwork, commitment and transparency in communication.
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="random"
          width={100}
          height={100}
          className="w-auto md:w-1/3 xl:w-auto h-auto pt-36 2xl:pt-20 order-first md:order-none"
          src={"/assets/img/essentials/Essential_2007.svg"}
        ></Image>
      </div>
    </div>
  );
};

export default Essentials;
