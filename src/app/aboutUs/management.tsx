import Image from "next/image";

const Management = () => {
  return (
    <div className="relative w-full flex bg-essentialBackground">
      <div className="grid w-full grid-rows-2 grid-cols-1 2xl:grid-rows-1 2xl:grid-cols-2 mx-auto items-center">
        <div className="flex relative sm:mx-auto w-full">
          <div className="hidden sm:flex select-none">
            <Image
              className="w-auto h-auto"
              src={"/assets/img/AboutUs/management/background.webp"}
              alt="background"
              height={600}
              width={350}
            ></Image>
            <Image
              className="w-auto absolute bottom-0"
              src={"/assets/img/AboutUs/management/builder.webp"}
              alt="builder"
              width={350}
              height={600}
            ></Image>
          </div>
          <div className="bg-productionColorVia w-1/2 mx-auto sm:mx-0 sm:max-w-275">
            <div className="px-1 py-3 border-b-2 border-essentialBackground">
              <Image
                className="w-auto mx-auto"
                src={"/assets/img/AboutUs/management/ISO.webp"}
                alt="ISO"
                width={200}
                height={200}
              ></Image>
              <div className="mt-4 text-white text-center font-Poppins text-lg font-medium leading-8">
                ISO 14001 for its environmental management
              </div>
            </div>
            <div className="px-1 py-3 border-b-2 border-essentialBackground">
              <Image
                className="w-auto mx-auto bg-white rounded-full"
                src={"/assets/img/AboutUs/management/OHSAS.webp"}
                alt="ISO"
                width={200}
                height={200}
              ></Image>
              <div className="mt-4 text-white max-w-xs text-center font-Poppins text-lg font-medium leading-8">
                ISO 9001 for quality management
              </div>
            </div>
            <div className="p-5 h-1/3">
              <Image
                className="w-auto mx-auto"
                src={"/assets/img/AboutUs/management/OSHAS.webp"}
                alt="ISO"
                width={200}
                height={200}
              ></Image>
              <div className="mt-4 text-white max-w-xs text-center font-Poppins text-lg font-medium leading-8">
                OHSAS 18001 for the health and safety of its employees
              </div>
            </div>
          </div>
        </div>
        <div
          id="text"
          className="w-auto z-20 justify-center flex flex-col items-center mx-32 2xl:mx-20 mt-0 2xl:mt-20 mb-0 2xl:mb-24"
        >
          <div
            id="text"
            className="space-y-3 items-center md:items-start flex flex-col"
          >
            <h3 className="text-buttonColor w-full h-full font-Montserrat text-4xl lg:text-5xl font-bold leading-managementHeight">
              Quality Management System
            </h3>
            <p className="mt-9 w-full 2xl:max-w-3xl text-aboutUs font-Poppins text-lg leading-8">
              To guarantee the performance of its management in terms of Health,
              Safety, Environment and Quality, MFG has certified its activities
              for many years by internationally recognized organizations. Thus,
              production is carried out in accordance with regularly audited
              production standards.
            </p>
            <p className="mt-10 w-full 2xl:max-w-3xl text-aboutUs font-Poppins text-lg leading-8">
              Serving quality of life and customer satisfaction, the MFG central
              laboratory obtained a favorable accreditation decision for
              physicochemical testing of glass following the ALGERAC evaluation
              (the Algerian Accreditation Body) in accordance with standard
              ISO/IEC 17025:2005. This accreditation attests to the technical
              competence of the MFG laboratory in the field of physicochemical
              analyzes of raw materials and finished flat glass products, as
              well as the proper functioning of the quality management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
