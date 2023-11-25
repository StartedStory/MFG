"use client";

const Contact = () => {
  return (
    <div className="relative">
      <div className="z-0 absolute min-h-full w-full left-0 top-0 bg-cover bg-contactImg"></div>

      <div id="contact-wrapper" className="z-50 py-20 relative">
        <div className="  flex justify-center items-end gap-3 text-secondary">
          <hr className="mb-1 border-b border-secondary w-12"></hr>
          <h2 className="uppercase font-bold ">Contact Nouz</h2>
        </div>
        <div id="text" className="flex justify-center">
          <h3 className="text-center text-4xl max-w-sm font-bold">
            Let&apos;s connect
          </h3>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-2 max-w-7xl mx-auto z-50">
          <div id="form" className="m-12">
            <h2 className="text-2xl mb-8 font-bold ">Send the message</h2>
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
              {/* Button */}
              <div className="mx-2 py-6">
                <button className="group relative bg-secondary hover:bg-[#0e7ceb] py-3 px-6 text-white outline-none  focus:bg-secondary">
                  <span
                    className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-[#0e7ceb]"
                    aria-hidden="true"
                  ></span>
                  <span className="uppercase font-bold">Send the message</span>
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
              Contact details
            </h2>

            <div id="address" className="flex items-center">
              <div className="flex h-16 rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-map-marker text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Our adress
                </div>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Mediterranean+Float+Glass+SPA/@36.5860674,3.1697604,19z/data=!4m10!1m2!2m1!1zMjksIFJvdXRlIGRlIE1lZnRhaCDigJMgbCJBcmJhw6Ig4oCTIDA5MzAwIFcuIEJsaWRh!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjMyOSwgUm91dGUgZGUgTWVmdGFoIOKAkyBsIkFyYmHDoiDigJMgMDkzMDAgVy4gQmxpZGGSAQ5nbGFzc19pbmR1c3RyeeABAA!16s%2Fg%2F11byyjjl1y?entry=ttu"
                  className="text-gray-500 font-medium not-italic"
                >
                  29, Route de Meftah – l&quot;Arbaâ – 09300 W. Blida
                </a>
              </div>
            </div>

            <div id="phone" className="flex items-center">
              <div className="flex h-16  rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-phone text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Phone
                </div>
                <a
                  target="_blank"
                  href="callto:+21321448644"
                  className="text-gray-500 font-medium not-italic"
                >
                  +213 21 448 644
                </a>
              </div>
            </div>
            <div id="phone" className="flex items-center">
              <div className="flex h-16  rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-print text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Fax
                </div>
                <a
                  target="_blank"
                  className="text-gray-500 font-medium not-italic"
                >
                  +213 448 580
                </a>
              </div>
            </div>
            <div id="commercial" className="flex items-center">
              <div className="flex h-16  rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Commercial et Marketing
                </div>
                <a
                  target="_blank"
                  href="mailto:contact@mfg.dz"
                  className="text-gray-500 font-medium not-italic"
                >
                  contact@mfg.dz
                </a>
              </div>
            </div>
            <div id="service" className="flex items-center">
              <div className="flex h-16  rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Served Local Market
                </div>
                <a
                  target="_blank"
                  href="mailto:mhamed.noureddine@cevital.com"
                  className="text-gray-500 font-medium not-italic"
                >
                  mhamed.noureddine@cevital.com
                </a>
                <a
                  target="_blank"
                  href="mailto:fouzi.baouche@cevital.com"
                  className="text-gray-500 font-medium not-italic"
                >
                  fouzi.baouche@cevital.com
                </a>
              </div>
            </div>
            <div id="commercial" className="flex items-center">
              <div className="flex h-16  rounded-full w-16 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Export Market Service
                </div>
                <a
                  target="_blank"
                  href="mailto:saliha.azzaz@cevital.com"
                  className="text-gray-500 font-medium not-italic"
                >
                  saliha.azzaz@cevital.com
                </a>
                <a
                  target="_blank"
                  href="mailto:mohand.houali@cevital.com"
                  className="text-gray-500 font-medium not-italic"
                >
                  mohand.houali@cevital.com
                </a>
                <a
                  target="_blank"
                  href="mailto:asma.hamimes@cevital.com"
                  className="text-gray-500 font-medium not-italic"
                >
                  asma.hamimes@cevital.com
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
