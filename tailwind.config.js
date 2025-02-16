/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'modal-slide-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95) translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        }
      },
      animation: {
        'modal-slide-in': 'modal-slide-in 0.3s ease-out'
      }
    },
  },
  plugins: [],
};