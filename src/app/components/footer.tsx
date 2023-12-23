import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center relative">
      <div className="absolute z-0 h-full w-full left-0 top-0  bg-cover bg-footerImg-one"></div>
      <div className="-mt-72 sm:-mt-24 z-50 w-full absolute left-0 top-0  bg-cover bg-footerImg-two md:max-w-5xl lg:max-w-7xl mx-auto lg:left-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
          <div className="flex flex-col w-full px-10 sm:px-20 space-y-4">
            <span className="text-white text-4xl font-bold">
              Always Stay Connected
            </span>
            <p className="text-white max-w-md">
              Stay informed with exclusive updates. Subscribe to our newsletter
              for the latest news and information.
            </p>
          </div>

          <div className="inline-flex flex-col lg:self-center px-20">
            <form
              action="https://send.hostarts.net/subscribe"
              method="POST"
              accept-charset="utf-8"
            >
              <label
                htmlFor="name"
                className="block uppercase tracking-wide text-white text-xs font-bold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <br />
              <div className="hidden">
                <label htmlFor="hp">HP</label>
                <br />
                <input type="text" name="hp" id="hp" />
              </div>
              <input type="hidden" name="list" value="7cYUlEQyuxtKv0Fkv2BvMA" />
              <input type="hidden" name="subform" value="yes" />
              <div className="mx-2 self-start ml-10 md:ml-2">
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="group relative bg-[#0054a7] hover:bg-[#0054a7]/70 py-3 px-6 text-white outline-none  focus:bg-[#0054a7]"
                >
                  <span
                    className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-[#0054a7] group-hover:border-primary group-focus:border-primary"
                    aria-hidden="true"
                  ></span>
                  <span className="uppercase font-bold">Submit</span>
                  <span
                    className="absolute -bottom-2 -end-2 block h-5 w-5 rotate-180 border-s-4 border-t-4 border-[#0054a7] group-hover:border-primary group-focus:border-[#0054a7]"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="z-10 mt-52 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-auto max-w-7xl p-20 pt-40 lg:pt-60 gap-8">
        <div id="brand" className="flex flex-col gap-6 text-white">
          <Link href="/">
            <Image
              className="w-24 h-20"
              height={150}
              width={150}
              alt="Logo Footer"
              src={"/assets/img/Home/logo-petit.webp"}
            ></Image>
          </Link>
          <div className="space-y-3">
            <p className="">
              World quality glass. Export 70%, Europe, Tunisia, Africa. ISO
              certified. Discover our range, innovation, dedication.
            </p>
            <div className="flex flex-row gap-2">
              <div className=" h-6 bg-primary  w-6 flex items-center justify-center">
                <i className="fa fa-facebook la-3x text-[#272727] inline-flex "></i>
              </div>
              <div className=" h-6 bg-primary  w-6 flex items-center justify-center">
                <i className="fa fa-twitter la-3x text-[#272727] inline-flex "></i>
              </div>
              <div className=" h-6 bg-primary  w-6 flex items-center justify-center">
                <i className="fa fa-instagram la-3x text-[#272727] inline-flex "></i>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-menu-1" className="md:px-5">
          <div className="text-xl text-white font-bold">
            <h2>Quick Links</h2>
            <div className=" border-b-2 border-primary w-8 pb-3 mb-4"></div>
          </div>
          <ul className="font-semibold text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutUs">About us</Link>
            </li>
            <li>Our Products</li>
            <li>
              <Link href="/blog">News</Link>
            </li>
            <li>
              <Link href="/ToolsAndDownload">Tools and download</Link>
            </li>
            <li>Career</li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div id="footer-menu-2" className="md:px-5">
          <div className="text-xl text-white font-bold">
            <h2>Useful links</h2>
            <div className=" border-b-2 border-primary w-8 pb-3 mb-4"></div>
          </div>
          <ul className="font-semibold text-white">
            <li>Services Policy</li>
            <li>Terms and conditions</li>
            <li>Online Agreement</li>
            <li>Privacy Policy</li>
            <li>Copyright problem</li>
          </ul>
        </div>
        <div id="contact-mini" className="md:px-5">
          <div className="text-xl text-white font-bold">
            <h2>Contact Us</h2>
            <div className=" border-b-2 border-primary w-8 pb-3 mb-4"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4 text-white">
              <i className="fa fa-phone text-primary fa-lg"></i>
              <div className="flex flex-col">
                <span>Phone</span>
                <a>+213 21 448 644</a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-white">
              <i className="fa fa-phone text-primary fa-lg"></i>
              <div className="flex flex-col">
                <span>E-mail</span>
                <a href="mailto:contact@mfg.dz">contact@mfg.dz</a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-white">
              <i className="fa fa-map-marker text-primary fa-lg"></i>
              <div className="flex flex-col">
                <span>Notra adresse</span>
                <a
                  className="hover:text-primary transition-all duration-200"
                  href="https://www.google.com/maps/place/Mediterranean+Float+Glass/@36.5860674,3.1697604,19z/data=!4m10!1m2!2m1!1zMjksIFJvdXRlIGRlIE1lZnRhaCDigJMgbOKAmUFyYmHDoiDigJMgMDkzMDAgVy4gQmxpZGE!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjUyOSwgUm91dGUgZGUgTWVmdGFoIOKAkyBs4oCZQXJiYcOiIOKAkyAwOTMwMCBXLiBCbGlkYZIBDmdsYXNzX2luZHVzdHJ54AEA!16s%2Fg%2F11byyjjl1y?entry=ttu"
                >
                  29, Route de Meftah – l’Arbaâ – 09300 W. Blida
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 py-6 border-gray-500 border-t-2 w-full text-center text-white font-medium">
        Copyright 2023, Mediterranean Float Glass MFG. All Rights Reserved
      </div>
    </footer>
  );
}
