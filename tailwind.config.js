/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#81e296",

          secondary: "#72fc5d",

          accent: "#42ce8d",

          neutral: "#1b1e32",

          "base-100": "#f8f8fc",

          info: "#42a2f5",

          success: "#26d968",

          warning: "#d16e0a",

          error: "#ef393f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

