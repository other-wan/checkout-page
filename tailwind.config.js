/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
      },

      fontSize: {
        "fs-10": "0.75rem",
        "fs-20": "0.875rem",
        "fs-30": "1.00rem",
        "fs-40": "1.125rem",
      },

      lineHeight: {
        "lh-01": "1.125rem",
        "lh-02": "1.225rem",
        "lh-03": "1.3125rem",
        "lh-04": "1.75rem",
        "lh-05": "1.25rem",
      },

      colors: {
        "dark-01": "#737373",
        "dark-02": "#262D33",
        "blue-01": "#1F2A54",
      },

      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(10.625rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
