/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      sans: ["thin"],
    },
    extend: {
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { color: theme("colors.transparent") },
          "100%": { color: theme("colors.neutral") },
        },
      }),
    },
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
