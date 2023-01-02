/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      colors: {
        'primary': '#55AFF7',
        'secondary': '#f16c00',
        'base-text': '#333333',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        slideIn: {
          '0%': { top: "-62px" },
          '100%': { top: 0 }
        },
        slideOut: {
          '0%': { top: 0 },
          '100%': { top: "-62px" }
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms forwards',
        fadeOut: 'fadeOut 500ms forwards',
        slideIn: 'slideIn 500ms forwards',
        slideOut: 'slideOut 500ms forwards',
      },
    },
  },
  plugins: [],
}
