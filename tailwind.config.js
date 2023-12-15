/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgFrom: "#00d2ff",
        bgTo: "#3a7bd5",
        mainBg: "#22252c"
      },
      backgroundImage: {
        'banner': "url('https://comeout.netlify.app/demo/default/img/header-bg.jpg')",
        'workBanner': "url('https://comeout.netlify.app/demo/default/img/portfolio/port-bg.jpg')"
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

