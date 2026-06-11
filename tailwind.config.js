/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        ink: '#0C0C0C',
        surface: '#111111',
        soft: '#171717',
        metal: '#BBCCD7',
        muted: '#646973',
      },
      boxShadow: {
        glow: '0 0 32px rgba(182,0,168,.22)',
        softline: '0 0 50px rgba(187,204,215,.08)'
      }
    },
  },
  plugins: [],
};
