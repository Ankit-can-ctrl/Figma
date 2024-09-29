/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Head: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(68deg, rgba(116,181,255,1) 0%, rgba(108,211,246,1) 18%, rgba(212,163,189,1) 44%, rgba(108,211,246,1) 72%, rgba(116,181,255,1) 100%)",
        "offer-gradient":
          "linear-gradient(168deg, rgba(116,181,255,1) 43%, rgba(108,211,246,1) 83%, rgba(212,163,189,1) 100%)",
      },
    },
  },
  plugins: [],
};
