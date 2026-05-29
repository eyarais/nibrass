import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nibras: {
          purple: "#7B4CC2",
          lavender: "#F3EEF9",
          pink: "#FF8FC7",
          glow: "#FFD46B",
          ink: "#2D2440",
          mint: "#58C7A2"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(123, 76, 194, 0.16)",
        glow: "0 0 45px rgba(255, 212, 107, 0.55)"
      },
      borderRadius: {
        soft: "1.5rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.68", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
