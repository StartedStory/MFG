import Image from "next/image";

const Management = () => {
  return (
    <div className="relative w-full flex bg-essentialBackground">
      <div className="grid w-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 mx-auto items-center">
        <div className="flex">
          <div className="select-none">
            <Image
              className="w-auto"
              src={"/assets/img/management/background.png"}
              alt="background"
              height={600}
              width={350}
            ></Image>
            <Image
              className="absolute bottom-0 w-auto"
              src={"/assets/img/management/builder.png"}
              alt="builder"
              width={350}
              height={600}
            ></Image>
          </div>
          <div className="bg-productionColorVia max-w-275">
            <div className="px-1 py-3 border-b-2 border-essentialBackground">
              <Image
                className="w-auto mx-auto"
                src={"/assets/img/management/ISO.png"}
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
                src={"/assets/img/management/OHSAS.png"}
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
                src={"/assets/img/management/OSHAS.png"}
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
          className="z-20 justify-center flex flex-col items-center mr-36 mt-20 mb-24"
        >
          <div
            id="text"
            className="space-y-3 items-center md:items-start flex flex-col"
          >
            <h3 className="text-buttonColor w-full 2xl:w-11/12 font-Montserrat text-5xl font-bold leading-managementHeight">
              Quality Management System
            </h3>
            <p className="mt-9 max-w-md md:max-w-3xl text-aboutUs font-Poppins text-lg leading-8">
              To guarantee the performance of its management in terms of Health,
              Safety, Environment and Quality, MFG has certified its activities
              for many years by internationally recognized organizations. Thus,
              production is carried out in accordance with regularly audited
              production standards.
            </p>
            <p className="mt-10 max-w-md md:max-w-3xl text-aboutUs font-Poppins text-lg leading-8">
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
