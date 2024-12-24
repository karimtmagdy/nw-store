// import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";
import debugScreens from "tailwindcss-debug-screens";
const debugScreen =
  process.env.NODE_ENV === "development" ? debugScreens : null;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./utility/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          50: "#f0f0ff",
          100: "#e4e4ff",
          200: "#cdceff",
          300: "#a7a6ff",
          400: "#7c73ff",
          500: "#523bff",
          600: "#3e14ff",
          700: "#330aff",
          800: "#2501d6",
          900: "#2003af",
          950: "#0f0077",
        },
        warning: {
          50: "#fdfee8",
          100: "#fbffc2",
          200: "#faff87",
          300: "#ffff43",
          400: "#fff424",
          500: "#efda03",
          600: "#ceab00",
          700: "#a47b04",
          800: "#88600b",
          900: "#734e10",
          950: "#432905",
        },
        accent: {
          50: "#edffe4",
          100: "#d6ffc4",
          200: "#b0ff90",
          300: "#7cff50",
          400: "#37ff00",
          500: "#2ce600",
          600: "#1eb800",
          700: "#178b00",
          800: "#176d07",
          900: "#165c0b",
          950: "#053400",
        },
        danger: {
          50: "#fff0f1",
          100: "#ffdddf",
          200: "#ffc0c3",
          300: "#ff9499",
          400: "#ff575f",
          500: "#ff232d",
          600: "#ff000c",
          700: "#d7000a",
          800: "#b1030b",
          900: "#920a10",
          950: "#500004",
        },
        brand: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    forms({ strategy: "class" }),
    ...(debugScreen ? [debugScreens] : []),
  ],
};
