import Image from "next/image";
import Header from "../components/header";
import Hero from "./hero";
import About from "./about";
import Production from "./production";
import Essentials from "./essentials";
import Contact from "./contact";
import Map from "./map";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Production />
      <Essentials />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default AboutUs;
