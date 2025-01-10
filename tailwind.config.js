/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Default shadow
        sm: "1px 1px 3px rgba(0, 0, 0, 0.1)", // Small shadow
        lg: "4px 4px 6px rgba(0, 0, 0, 0.3)", // Large shadow
      },
    },
  },
  plugins: [],
}