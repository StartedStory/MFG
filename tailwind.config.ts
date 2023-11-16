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
        buttonColor: "#242424",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-landing": "url('/assets/img/about/landing.png')",
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
      height: {
        "700": "700px",
        "300": "300px",
      },
    },
  },
  plugins: [],
};
export default config;
