import Header from "../components/header";
import Hero from "./hero";
import SolarControl from "./solarControl";
import ThermalInsulation from "./thermalInsulation";
import Security from "./security";
import ReflectiveLenses from "./reflectiveLenses";
import TechnicalCatalog from "./technicalCatalog";
import Bim from "./bim";
import Certifications from "./certifications";
import Footer from "../components/footer";

const ToolsAndDownload = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="overflow-y-auto h-300 mb-40">
        <SolarControl />
        <ThermalInsulation />
        <Security />
        <ReflectiveLenses />
        <TechnicalCatalog />
        <Bim />
        <Certifications />
      </div>
      <Footer />
    </div>
  );
};

export default ToolsAndDownload;
