import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Poppins: ["Poppins"],
      },
      colors: {
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        landingImgColor: "#000000",
        aboutUs: "#4D4D4D",
        buttonColor: "#242424",
        productionColorTo: "#0054A7",
        productionColorVia: "#00B0F0",
        essentialBackground: "#F8F9FA",
        manufactureButton: "#F9F9F9",
        toolsLandingColor: "#606060",
        toolsNavColor: "#dadada",
        toolsTitle: "#EBEBEB",
        toolsIframe: "#d1d1d1",
        toolsIframeButton: "#bdd1d0",
        toolsDownload: "#02226a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-landing": "url('/assets/img/about/landing.png')",
        "tools-download": "url('/assets/img/ToolsAndDownload/office.jpg')",
        "essential-landing": "url('/assets/img/essentials/Mask_group.png')",
        "states-landing": "url('/assets/img/states/states_background.png')",
        "technical-background":
          "url('https://mfg.dz/wp-content/uploads/2017/12/catalogueface.png')",
        "bim-background":
          "url('https://mfg.dz/wp-content/uploads/2018/03/bim-img.png')",
      },
      marker: {
        long: {
          content: '""',
          display: "block",
          width: "1.5em", // Adjust the width as needed
          height: "2px", // Adjust the height as needed
          backgroundColor: "black", // Adjust the color as needed
          marginLeft: "-1.5em", // Match the width to align the marker
        },
      },
      lineHeight: {
        productionLineHeight: "56px",
        managementHeight: "60.5px",
      },
      margin: {
        "470": "470px",
        "165": "165px",
        "160": "160px",
        "150": "150px",
        "145": "145px",
        "140": "140px",
        "130": "130px",
        "133": "133px",
        "100": "100px",
        "90": "90px",
        "80": "80px",
        "77": "77px",
        "70": "70px",
        "65": "65px",
        "60": "60px",
        "50": "50px",
        M40: "40px",
        "30": "30px",
        "10": "10px",
      },
      width: {
        "752": "752px",
        "972": "972px",
        "120": "120px",
        "60": "60px",
      },
      height: {
        "784": "784px",
        "700": "700px",
        "554": "554px",
        T400: "400px",
        "300": "300px",
        "32": "32px",
        "60": "60px",
      },
      maxWidth: {
        "275": "275px",
      },
      opacity: {
        "2.5": "0.025",
      },
    },
  },
  plugins: [],
};
export default config;
