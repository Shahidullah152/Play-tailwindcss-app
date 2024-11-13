/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        details: "url('./assets/blog/blog-details-01.jpg')",
      },
    },
  },
  plugins: [],
};
