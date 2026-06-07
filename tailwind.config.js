/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f3460',
          400: '#0a0f1e',
        },
        accent: {
          primary: '#e94560',
          secondary: '#533483',
          glow: '#ff6b6b',
        }
      },
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
        'english': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(233,69,96,0.5)' },
          '50%': { textShadow: '0 0 30px rgba(233,69,96,0.8)' },
        }
      }
    },
  },
  plugins: [],
}
