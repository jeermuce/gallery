import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      dropShadow: {
        Prem: "0 0px 1rem var(--primary-opacity)",
        Arem: "0 0px 1rem var(--accent-opacity)",
        Srem: "0 0px 1rem var(--secondary-opacity)",
        Frem: "0 0px 0.5rem var(--secondary-opacity)",
      },
      colors: {
        github: {
          bg: "var(--github-bg)",
          tx: "var(--github-tx)",
        },
        text: {
          DEFAULT: {
            DEFAULT: "var(--text)",
            opacity: "var(--text-opacity)",
          },
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
          950: "var(--text-950)",
        },
        background: {
          DEFAULT: {
            DEFAULT: "var(--background)",
            opacity: "var(--background-opacity)",
          },
          100: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
          400: "var(--background-400)",
          500: "var(--background-500)",
          600: "var(--background-600)",
          700: "var(--background-700)",
          800: "var(--background-800)",
          900: "var(--background-900)",
          950: "var(--background-950)",
        },
        primary: {
          DEFAULT: {
            DEFAULT: "var(--primary)",
            opacity: "var(--primary-opacity)",
          },
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          DEFAULT: {
            DEFAULT: "var(--secondary)",
            opacity: "var(--secondary-opacity)",
          },
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          950: "var(--secondary-950)",
        },
        accent: {
          DEFAULT: {
            opacity: "var(--accent-opacity)",
            DEFAULT: "var(--accent)",
          },
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
      keyframes: {
        rotate180: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        rotate180: "rotate180 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("parent", ":not(:empty) > &");
      addVariant("parent-hover", ":not(:empty) > &:hover");
    },
  ],
  darkMode: "class",
} satisfies Config);
