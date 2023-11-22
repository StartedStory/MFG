const TechnicalCatalog = () => {
  return (
    <div className="mt-20 mx-32">
      <div className="flex flex-1 items-center">
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
        <h4 className="uppercase text-toolsLandingColor text-bold px-3">
          Technical catalog
        </h4>
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
      </div>
      <div className="flex items-center">
        <div className="mx-auto border-b border-b-toolsLandingColor mt-12 pb-3 w-1/4 flex justify-around items-center">
          <div className="text-sm font-Poppins text-productionColorTo">
            Policy-QHSE-Fr-23.06.2020
          </div>
          <a
            href="https://mfg.dz/wp-content/uploads/2018/11/MFG_Catalogue_Nov2018_Assemblage%201.pdf"
            download
          >
            <button className="p-3 bg-toolsDownload text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCatalog;
