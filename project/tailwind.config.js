/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};