import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'mobile': '360px',
      // => @media (min-width: 360px) { ... } 
      'ipad': '768px',
      // => @media (min-width: 768px) { ... }
      'laptop': '1245px',
      // => @media (min-width: 1245px) { ... }
    },
  },
  plugins: [],
};
export default config;
