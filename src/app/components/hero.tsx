import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col h-[700px] relative">
      <div
        className="absolute z-20 h-[700px]  w-full left-0 top-0 bg-cover"
        style={{ backgroundImage: "url('/assets/img/layer1.png')" }}
      ></div>

      <div
        className="absolute z-10 h-[700px] w-full left-0 top-0 bg-cover"
        style={{ backgroundImage: "url('/assets/img/hero.png')" }}
      ></div>
      <div className="mx-auto max-w-7xl w-full h-96 py-12 md:py-32">
        <div className="absolute z-50  gap-8 px-8 max-w-7xl mx-auto flex flex-col">
          <div></div>
          <h1 className="text-white text-6xl max-w-2xl font-bold">
            Glass innovation for the world
          </h1>
          <h2 className="text-white text-lg mt-4 max-w-2xl">
            Promoting Glass Markets Worldwide: Méditerranée Float Glass
            offers quality glass solutions to global scale. From clear to
            coated, from laminated to isolation.
          </h2>
          <div className="mt-10">
            <div className="relative py-4 w-64">
              <div className="absolute top-0 -mt-2 left-0  bg-secondary w-8 h-1"></div>
              <div className="absolute top-0 left-0 -mt-2 bg-secondary w-1 h-8"></div>
              <a
                className="bg-secondary ml-2 uppercase px-10 py-4 text-white font-bold"
                href="#"
              >
                LEARN MORE
              </a>
              <div className="absolute bottom-0 -mb-[0.4rem] mr-[1.7rem] right-0  bg-secondary w-8 h-1"></div>
              <div className="absolute bottom-0 right-0 mr-[1.7rem] -mb-[0.4rem] bg-secondary w-1 h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
