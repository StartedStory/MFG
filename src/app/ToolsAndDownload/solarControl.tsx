const SolarControl = () => {
  return (
    <div className="mt-20 mx-32">
      <div className="flex flex-1 items-center">
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
        <h4 className="uppercase text-toolsLandingColor text-bold px-3">
          Solar Control
        </h4>
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
      </div>
      <div className="flex items-center">
        <div className="mr-20 mt-12 w-1/4 h-T400">
          <iframe
            className="w-full h-3/4"
            src={
              "https://docs.google.com/viewer?url=" +
              encodeURIComponent(
                "http://mfg.dz/wp-content/uploads/2020/09/Politique-QHSE-Fr-23.06.2020.pdf"
              ) +
              "&embedded=true&hl=en"
            }
          ></iframe>
          <a
            href="http://mfg.dz/wp-content/uploads/2017/10/D%C3%A9pliant_contr%C3%B4le-solaire_eng.pdf"
            download
          >
            <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
              Download
            </button>
          </a>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400">
          <iframe
            className="w-full h-3/4"
            src={
              "https://docs.google.com/viewer?url=" +
              encodeURIComponent(
                "http://mfg.dz/wp-content/uploads/2020/09/Politique-QHSE-Fr-23.06.2020.pdf"
              ) +
              "&embedded=true&hl=en"
            }
          ></iframe>
          <a
            href="http://mfg.dz/wp-content/uploads/2017/10/fiche_tech_MEDICLIMA_600-et-700.pdf"
            download
          >
            <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
              Download
            </button>
          </a>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400">
          <iframe
            className="w-full h-3/4"
            src={
              "https://docs.google.com/viewer?url=" +
              encodeURIComponent(
                "http://mfg.dz/wp-content/uploads/2020/09/Politique-QHSE-Fr-23.06.2020.pdf"
              ) +
              "&embedded=true&hl=en"
            }
          ></iframe>
          <a
            href="http://mfg.dz/wp-content/uploads/2017/10/fiche_tech_MEDICLIMA_700.pdf"
            download
          >
            <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
              Download
            </button>
          </a>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
      </div>
    </div>
  );
};

export default SolarControl;
