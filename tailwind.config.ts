import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },

      colors: {
        text: {
          main: "var(--text-main)",
        },
        background: {
          main: "var(--background-main)",
        },
        primary: {
          main: "var(--primary-main)",
        },
        secondary: {
          main: "var(--secondary-main)",
        },
        accent: {
          main: "var(--accent-main)",
        },
      },
      backgroundImage: {
        "linear-primary-secondary": "var(--linearPrimarySecondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
