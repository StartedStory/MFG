import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center relative">
        <div
        className="absolute z-0 h-full w-full left-0 top-0  bg-cover"
        style={{ backgroundImage: "url('/assets/img/footerBg.png')" }}
      ></div>
      <div
        className="-mt-24 z-50 w-full absolute left-0 top-0  bg-cover md:max-w-5xl lg:max-w-7xl mx-auto lg:left-auto"
        style={{ backgroundImage: "url('/assets/img/cta.png')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
          <div className="flex flex-col w-full  px-20 space-y-4">
            <span className="text-white text-4xl font-bold">
              Restez Toujours Connecté
            </span>
            <p className="text-white max-w-md">
              Restez informé avec des mises à jour exclusives. Abonnez-vous à
              notre newsletter pour les dernières nouvelles et informations.
            </p>
          </div>

          <div className="inline-flex flex-col lg:self-center px-20">
            <form className="flex w-full" action={""}>
              <input
                placeholder="Enter Your Email"
                type="text"
                autoComplete="email"
                className="py-2 focus:outline-none px-4 w-full"
              ></input>
              <input
                type="submit"
                className="py-2 bg-secondary px-4 text-white"
                value={"S'abonner"}
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div className="z-10  mt-52 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-auto max-w-7xl p-20 lg:pt-60 gap-8">
        <div id="brand" className="flex flex-col gap-6 text-white">
          <Image
            className="w-32 h-32"
            height={150}
            width={150}
            alt="Logo Footer"
            src={"/assets/img/logo-petit.png"}
          ></Image>
          <div className="space-y-3">
            <p className="">
              Verre de qualité mondiale. Exportation 70%, Europe, Tunisie,
              Afrique. Certifiée ISO. Découvrez notre gamme, innovation,
              dévouement.
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
            <h2>Liens Rapides</h2>
            <div className=" border-b-2 border-primary w-8 pb-3 mb-4"></div>
          </div>
          <ul className="font-semibold text-white">
            <li>Accueil</li>
            <li>Notre Société</li>
            <li>Nos Produits</li>
            <li>Actualités</li>
            <li>Outils et téléchargement</li>
            <li>Carrière</li>
            <li>Contact</li>
          </ul>
        </div>
        <div id="footer-menu-2" className="md:px-5">
          <div className="text-xl text-white font-bold">
            <h2>Liens Utiles</h2>
            <div className=" border-b-2 border-primary w-8 pb-3 mb-4"></div>
          </div>
          <ul className="font-semibold text-white">
            <li>Politique des Services</li>
            <li>Conditions Générales </li>
            <li>Accord en Ligne</li>
            <li>Politique de Confidentialité</li>
            <li>Problème de Copyright</li>
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
                <span>Téléphone</span>
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
                <a className="hover:text-primary transition-all duration-200" href="https://www.google.com/maps/place/Mediterranean+Float+Glass/@36.5860674,3.1697604,19z/data=!4m10!1m2!2m1!1zMjksIFJvdXRlIGRlIE1lZnRhaCDigJMgbOKAmUFyYmHDoiDigJMgMDkzMDAgVy4gQmxpZGE!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjUyOSwgUm91dGUgZGUgTWVmdGFoIOKAkyBs4oCZQXJiYcOiIOKAkyAwOTMwMCBXLiBCbGlkYZIBDmdsYXNzX2luZHVzdHJ54AEA!16s%2Fg%2F11byyjjl1y?entry=ttu">29, Route de Meftah – l’Arbaâ – 09300 W. Blida</a>
              </div>
            </div>

        
          </div>
        </div>
      </div>
      <div className="z-50 py-6 border-gray-500 border-t-2 w-full text-center text-white font-medium">Copyright 2023, Mediterranean Float Glass MFG. All Rights Reserved</div>
    </footer>
  );
}
