import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";
export default withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        md: "600px",
        lg: "1345px",
        xl: "1760px",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    },
    screens: {
      md: "600px",
      lg: "1345px",
      xl: "1760px",
    },
    dropShadow: {
      Prem: "0 0px 1rem var(--primary-opacity)",
      Arem: "0 0px 1rem var(--accent-opacity)",
      Srem: "0 0px 1rem var(--secondary-opacity)",
      Frem: "0 0px 0.5rem var(--secondary-opacity)",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        github: {
          bg: "var(--github-bg)",
          tx: "var(--github-tx)",
        },
        text: {
          DEFAULT: {
            DEFAULT: "var(--text)",
            opacity: "var(--text-opacity)",
          },
        },
        bg: {
          DEFAULT: {
            DEFAULT: "var(--bg)",
            opacity: "var(--bg-opacity)",
          },
        },
        p: {
          DEFAULT: {
            DEFAULT: "var(--p)",
            opacity: "var(--p-opacity)",
          },
        },
        s: {
          DEFAULT: {
            DEFAULT: "var(--s)",
            opacity: "var(--s-opacity)",
          },
        },
        a: {
          DEFAULT: {
            opacity: "var(--a-opacity)",
            DEFAULT: "var(--a)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        rotate180: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      rotate: { rotate: "var(--rotate)" },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotate180: "rotate180 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("parent", ":not(:empty) > &");
      addVariant("parent-hover", ":not(:empty) > &:hover");
      addVariant("descendants", "& *");
    },
  ],
} satisfies Config);
