import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
     },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      marker: {
        long: {
          content: '""',
          display: 'block',
          width: '1.5em', // Adjust the width as needed
          height: '2px',   // Adjust the height as needed
          backgroundColor: 'black', // Adjust the color as needed
          marginLeft: '-1.5em', // Match the width to align the marker
        },
      },
    },
  },
  plugins: [],
}
export default config
