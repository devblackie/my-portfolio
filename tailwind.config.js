/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{'back-one':"url('./src/assets/images/bg-1.jpg')",}
    },
    colors: {
      certainBlue: "#528ac5",
      samBlue: "#1a56db",
      skyBlue: "#00ffff",
      hoverSkyBlue: "#00b5ff",
      lightBlue: "#87bbf8",
      iconBlue: "#337ab7",
      certainWhite: "#f5f5f5",
      masterBlack: "#000000",
      footerBlue: "#211a38",
      "dark-2": "#09090A",
      "dark-3": "#101012",
      "dark-4": "#1F1F22",
      "light-1": "#FFFFFF",
      "light-2": "#EFEFEF",
      "light-3": "#7878A3",
      "light-4": "#5C5C7B",
      "light-5": "#f4f2ee",
      newtIndigo:"#4b0082",
      newtPurple:"#663399",
      newtPink:"#ff00de",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"),],
}

