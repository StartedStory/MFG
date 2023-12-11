import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Stats from "./components/stats";
import Gallery from "./components/gallery/gallery";
import Oursite from "./components/oursite";
import Feedbacks from "./components/feedbacks";
import Contact from "./components/contact";
import Map from "./components/map";
import Blog from "./components/blog";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div id="container" className="">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Oursite />
      <Feedbacks />
      <Contact />
      <Map />
      <Blog />
      <Footer />
    </div>
  );
}
