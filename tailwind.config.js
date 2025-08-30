/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // incluye todo lo que está en /app
    "./components/**/*.{js,ts,jsx,tsx}" // incluye componentes
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0b5fff",   // azul corporativo
        accent: "#25D366",  // verde WhatsApp
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // tipografía moderna
      },
    },
  },
  plugins: [],
};
