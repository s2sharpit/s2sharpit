/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        "container-color": "var(--container-color)",
        "title-color": "var(--title-color)",
        "title-color-dark": "var(--title-color-dark)",
        "body-color": "var(--body-color)",
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "border-color": ({ opacityValue }) => {
          return `rgba(var(--border-color), ${opacityValue})`
        },
      },
      boxShadow: {
        profile: 'inset 0 0 0 6px rgb(255 255 255 / 30%)',
        smProfile: 'inset 0 0 0 8px rgb(255 255 255 / 30%)',
      },
      keyframes: {
        profile: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(3.75rem)' },
        },
        wave: {
          // '0%, 50%, 100%': {transform: 'rotate(0)'},
          // '25%': {transform: 'rotate(-12deg)'},
          // '75%': {transform: 'rotate(12deg)'},
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(-10.0deg)' },
          '20%': { transform: 'rotate(12.0deg)' },
          '30%': { transform: 'rotate(-10.0deg)' },
          '40%': { transform: 'rotate(9.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        profile: 'profile 4s ease-in-out infinite',
        wheel: 'scroll 2s ease infinite',
        wave: 'wave 2s ease infinite',
      },
    },
  },
  plugins: [],
}