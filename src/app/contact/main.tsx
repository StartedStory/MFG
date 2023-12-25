"use client";

const Main = () => {
  const detailItems = [
    {
      id: "address",
      icon: "fa-map-marker",
      text: "Our locaton",
      description: "29, Route de Meftah – l&quot;Arbaâ – 09300 W. Blida",
      link: "https://www.google.com/maps/place/Mediterranean+Float+Glass+SPA/@36.5860674,3.1697604,19z/data=!4m10!1m2!2m1!1zMjksIFJvdXRlIGRlIE1lZnRhaCDigJMgbCJBcmJhw6Ig4oCTIDA5MzAwIFcuIEJsaWRh!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjMyOSwgUm91dGUgZGUgTWVmdGFoIOKAkyBsIkFyYmHDoiDigJMgMDkzMDAgVy4gQmxpZGGSAQ5nbGFzc19pbmR1c3RyeeABAA!16s%2Fg%2F11byyjjl1y?entry=ttu",
    },
    {
      id: "phone",
      icon: "fa-phone",
      text: "Our locaton",
      description: "+213 21 448 644",
      link: "callto:+21321448644",
    },
    {
      id: "phone",
      icon: "fa-print",
      text: "Fax",
      description: "+213 21 448 644",
      link: "#",
    },
    {
      id: "commercial",
      icon: "fa-envelope",
      text: "Commercial & Marketing",
      description: "contact@mfg.dz",
      link: "mailto:contact@mfg.dz",
    },
    {
      id: "service",
      icon: "fa-envelope",
      text: "Local orders Services",
      description: [
        "mhamed.noureddine@cevital.com",
        "fouzi.baouche@cevital.com",
      ],
      link: [
        "mailto:mhamed.noureddine@cevital.com",
        "mailto:fouzi.baouche@cevital.com",
      ],
    },
    {
      id: "commercial",
      icon: "fa-envelope",
      text: "Export Service",
      description: [
        "saliha.azzaz@cevital.com",
        "mohand.houali@cevital.com",
        "asma.hamimes@cevital.com",
      ],
      link: [
        "mailto:saliha.azzaz@cevital.com",
        "mailto:mohand.houali@cevital.com",
        "mailto:asma.hamimes@cevital.com",
      ],
    },
  ];
  return (
    <div className="relative">
      <div className="z-0 absolute min-h-full w-full left-0 top-0 bg-cover bg-contactImg"></div>

      <div id="contact-wrapper" className="z-50 py-20 relative">
        <div className="flex justify-center items-end gap-3 text-secondary">
          <hr className="mb-1 border-b border-secondary w-12"></hr>
          <h2 className="font-bold ">Contact us</h2>
        </div>
        <div id="text" className="flex justify-center">
          <h3 className="text-center text-4xl max-w-sm font-bold">
            Let&apos;s Connect
          </h3>
        </div>
        <div className="flex justify-center gap-5 mt-20">
          <button className="bg-productionColorTo px-8 py-3.5 text-lg font-medium leading-7 text-white border border-productionColorTo shadow-sm hover:bg-productionColorTo hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-productionColorTo">
            Contact Algeria
          </button>
          <button className="bg-white px-8 py-3.5 text-lg font-medium leading-7 text-productionColorTo border border-productionColorTo shadow-sm hover:bg-productionColorTo hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-productionColorTo">
            Contact Tunisia
          </button>
          <button className="bg-white px-8 py-3.5 text-lg font-medium leading-7 text-productionColorTo border border-productionColorTo shadow-sm hover:bg-productionColorTo hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-productionColorTo">
            Contact Morocco
          </button>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-2 max-w-7xl mx-auto z-50">
          <div id="form" className="m-12">
            <h2 className="text-2xl mb-8 font-bold ">Send your message</h2>
            <form className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <input
                name="eMail"
                placeholder="E-Mail"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <input
                name="subject"
                placeholder="Subject"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <textarea
                placeholder="Window Message"
                name="message"
                className="border hover:border-secondary focus:outline-none p-4 focus:border-secondary h-56 w-full border-gray-300 resize-none"
              ></textarea>
              <div className="mx-2 py-6">
                <button className="group relative bg-secondary hover:bg-[#0e7ceb] py-3 px-6 text-white outline-none  focus:bg-secondary">
                  <span
                    className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-[#0e7ceb]"
                    aria-hidden="true"
                  ></span>
                  <span className="py-4 px-24 text-lg font-semibold leading-7">
                    Send
                  </span>
                  <span
                    className="absolute -bottom-2 -end-2 block h-5 w-5 rotate-180 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-secondary"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </form>
          </div>
          <address id="details" className="mt-10 lg:mt-4 mx-12 space-y-8">
            <h2 className="text-2xl mb-8 lg:mt-8 font-bold not-italic ">
              Contact Details
            </h2>

            {detailItems.map((item, index) => (
              <div id={item.id} className="flex items-center" key={index}>
                <div className="flex h-16 rounded-full w-16 justify-center items-center bg-secondary">
                  <span>
                    <i className={"fa fa-2x text-white " + item.icon}></i>
                  </span>
                </div>
                <div className="flex flex-col mx-3 my-2">
                  <div className="font-medium text-secondary not-italic ">
                    {item.text}
                  </div>
                  {typeof item.description === "string" ? (
                    <a
                      target="_blank"
                      href={typeof item.link === 'string' ? item.link : '#'}
                      className="text-gray-500 font-medium not-italic"
                    >
                      {item.description}
                    </a>
                  ) : (
                    item.description.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        target="_blank"
                        href={item.link[subIndex]}
                        className="text-gray-500 font-medium not-italic"
                      >
                        {subItem}
                      </a>
                    ))
                  )}
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>
    </div>
  );
};

export default Main;
