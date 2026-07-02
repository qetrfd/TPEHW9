/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#150d0d',
        ember: '#3c171a',
        wine: '#6d2230',
        gold: '#b98c45',
        parchment: '#f0debf',
        mist: '#e9dbc6',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Trebuchet MS', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(185, 140, 69, 0.18)',
        paper: '0 24px 60px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        radialCabaret:
          'radial-gradient(circle at top, rgba(138, 51, 58, 0.25), transparent 45%), radial-gradient(circle at bottom, rgba(185, 140, 69, 0.12), transparent 30%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        pulseLine: 'pulseLine 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
