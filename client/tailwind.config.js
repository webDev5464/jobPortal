export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#ca8a04",
        black: '#0b1215',
        gray: 'gray'
      }
    },
    screens: {
      qs: { max: "380px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1440px" },
    },
  },
  plugins: [],
}