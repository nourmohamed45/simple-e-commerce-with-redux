/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-gray-900",
    "text-white",
    "shadow-lg",
    "text-amber-500",
    "hover:text-amber-400",
    "bg-amber-500",
    "hover:bg-amber-600",
    "rounded-lg",
    "shadow-md",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
