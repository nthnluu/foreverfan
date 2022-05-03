const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '120rem',
      }
    },
  },
  plugins: [],
}
