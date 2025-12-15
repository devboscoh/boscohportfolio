/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neulis Sans", "system-ui", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#1E3A8A", // Royal Blue
          light: "#3B5CCC",
          dark: "#162B65",
        },

        scarlet: {
          DEFAULT: "#C1121F",
          light: "#E63946",
          dark: "#8B0D17",
        },

        olive: {
          DEFAULT: "#6B8E23",
          light: "#8FAA3C",
          dark: "#556B2F",
        },

        mustard: {
          DEFAULT: "#D4A017",
          light: "#E8B923",
          dark: "#B88A0E",
        },

        surface: {
          DEFAULT: "#F8FAFC",
          muted: "#EEF2F7",
          dark: "#0F172A",
        },

        text: {
          primary: "#0F172A",
          secondary: "#475569",
          inverted: "#F8FAFC",
        },
      },

      borderRadius: {
        xl: "0.75rem",
        '2xl': "1rem",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        medium: "0 8px 24px rgba(0,0,0,0.12)",
      },

      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
