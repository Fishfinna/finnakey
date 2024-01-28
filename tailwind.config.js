/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      sans: ["helvetica"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        darkey: {
          primary: "#fa742b",
          secondary: "#fac267",
          accent: "#fef08a",
          neutral: "#fdfffc",
          "base-100": "#191919",
          info: "#98eff9",
          success: "#ffb81f",
          warning: "#ea591a",
          error: "#ea2626",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
