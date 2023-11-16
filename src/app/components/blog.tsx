import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <div id="text" className=" space-y-6 items-center  flex flex-col">
        <div className="mt-10 flex justify-center md:justify-start items-end gap-3 text-secondary">
          <hr className="mb-1 border-b-2 border-secondary w-24"></hr>
          <h2 className="uppercase  font-bold">News</h2>
        </div>
        <h3 className="text-center md:text-left text-3xl max-w-lg font-bold text-black">
          Our latest news
        </h3>
      </div>
      <div
        id="entries"
        className="grid grid-cols-1 lg:grid-cols-3 py-20 pb-40 gap-12 lg:gap-8 mx-auto max-w-lg lg:max-w-max"
      >
        <div className="flex flex-col items-center justify-center mx-auto max-w-sm">
          <Image
            alt="blog 1"
            height={300}
            width={400}
            src={"/assets/img/blog-floating.png"}
          ></Image>
          <div className="flex flex-row w-full h-12 bg-gray-100 border-b border-l border-r justify-between px-5">
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-user text-secondary"></i> By Admin
              </span>
            </div>
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-calendar  text-secondary"></i> 29 August, 23
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full px-5  space-y-4">
            <h2 className="text-xl font-bold pt-4">
              MFG wins first prize for its innovative product “MEDICLEAN”
            </h2>
            <p>
              MFG (Mediterranean Float Glass) participated in the INNOVBAT 21018
              competition and won 1st prize – Sadok Stiti –...
            </p>
            <a
              className="text-secondary underline-offset-4	font-semibold underline decoration-[#add2f8]"
              href="#"
              target="_blank"
            >
              Continue reading
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto max-w-sm">
          <Image
            alt="blog 1"
            height={300}
            width={400}
            src={"/assets/img/blog-floating0.png"}
          ></Image>
          <div className="flex flex-row w-full h-12 bg-gray-100 border-b border-l border-r justify-between px-5">
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-user text-secondary"></i> By Admin
              </span>
            </div>
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-calendar  text-secondary"></i> 29 August, 23
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full px-5  space-y-4">
            <h2 className="text-xl font-bold pt-4">
              MFG wins first prize for its innovative product “MEDICLEAN”
            </h2>
            <p>
              MFG (Mediterranean Float Glass) participated in the INNOVBAT 21018
              competition and won 1st prize – Sadok Stiti –...
            </p>
            <a
              className="text-secondary underline-offset-4	font-semibold underline decoration-[#add2f8]"
              href="#"
              target="_blank"
            >
              Continue reading
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto max-w-sm">
          <Image
            alt="blog 1"
            height={300}
            width={400}
            src={"/assets/img/blog-floating0.png"}
          ></Image>
          <div className="flex flex-row w-full h-12 bg-gray-100 border-b border-l border-r justify-between px-5">
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-user text-secondary"></i> By Admin
              </span>
            </div>
            <div className="text-xs font-light items-center flex">
              <span>
                <i className="fa fa-calendar  text-secondary"></i> 29 August, 23
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full px-5  space-y-4">
            <h2 className="text-xl font-bold pt-4">
              MFG wins first prize for its innovative product “MEDICLEAN”
            </h2>
            <p>
              MFG (Mediterranean Float Glass) participated in the INNOVBAT 21018
              competition and won 1st prize – Sadok Stiti –...
            </p>
            <a
              className="text-secondary underline-offset-4	font-semibold underline decoration-[#add2f8]"
              href="#"
              target="_blank"
            >
              Continue reading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
