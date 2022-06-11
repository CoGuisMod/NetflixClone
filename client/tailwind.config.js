module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/bg-image.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
