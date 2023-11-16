import Image from "next/image";
import Header from "../components/header";
import Hero from "./hero";
import About from "./about";
import Production from "./production";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Production />
    </div>
  );
};

export default AboutUs;
