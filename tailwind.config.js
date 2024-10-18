module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410px", // Adding custom breakpoint
      },
    },
  },
  plugins: [],
};
