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
        <div className="mr-48 mt-12 w-1/4 h-T400">
          <iframe className="w-full h-3/4 bg-technical-background bg-contain"></iframe>
          <a
            href="https://mfg.dz/wp-content/uploads/2018/11/MFG_Catalogue_Nov2018_Assemblage%201.pdf"
            download
          >
            <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
              Download
            </button>
          </a>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
      </div>
    </div>
  );
};

export default TechnicalCatalog;
