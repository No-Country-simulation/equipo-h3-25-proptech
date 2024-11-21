/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'md': '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
        'lg': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)',
        'xl': '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
        '2xl': '0 25px 50px rgba(0,0,0,0.25)',
        'inner': 'inset 0 2px 4px rgba(0,0,0,0.06)',
        'none': 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-default': {
          textShadow: '0 0 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '0 0 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-xl': {
          textShadow: '0 0 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-2xl': {
          textShadow: '0 0 2rem rgba(0, 0, 0, 1)',
        },
        '.text-shadow-inner': {
          textShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
