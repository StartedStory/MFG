const ReflectiveLenses = () => {
  return (
    <div className="mt-20 mx-32">
      <div className="flex flex-1 items-center">
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
        <h4 className="uppercase text-toolsLandingColor text-bold px-3">
          Reflective Lenses
        </h4>
        <span className="flex flex-1 bg-toolsTitle w-auto h-[1px] border-t-1 border-toolsTitle"></span>
      </div>
      <div className="flex items-center">
        <div className="mr-20 mt-12 w-1/4 h-T400">
          <iframe
            className="w-full h-3/4"
            src={
              "https://docs.google.com/viewer?url=http%3A%2F%2Fmfg.dz%2Fwp-content%2Fuploads%2F2017%2F10%2FD%C3%A9pliant_contr%C3%B4le-solaire_eng.pdf&embedded=true&hl=en"
            }
          ></iframe>
          <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
            Download
          </button>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400">
          <iframe
            className="w-full h-3/4"
            src={
              "https://docs.google.com/viewer?url=http%3A%2F%2Fmfg.dz%2Fwp-content%2Fuploads%2F2017%2F10%2FD%C3%A9pliant_contr%C3%B4le-solaire_eng.pdf&embedded=true&hl=en"
            }
          ></iframe>
          <button className="text-sm font-Poppins w-full px-24 py-3 mt-1 bg-toolsIframeButton">
            Download
          </button>
        </div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
        <div className="mr-20 mt-12 w-1/4 h-T400"></div>
      </div>
    </div>
  );
};

export default ReflectiveLenses;
