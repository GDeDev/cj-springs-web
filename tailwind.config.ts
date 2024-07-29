import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "var(--color-white)",
        black: "var(--color-black)",
        primary: {
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
        },
        secondary: {
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
        },
        danger: {
          400: "var(--color-danger-400)",
          500: "var(--color-danger-500)",
        },
        success: {
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
        },
        warning: {
          500: "var(--color-warning-500)",
        },
        gray: {
          300: "var(--color-gray-300)",
          500: "var(--color-gray-500)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
