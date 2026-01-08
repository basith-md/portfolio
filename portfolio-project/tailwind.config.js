/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          amber: '#f5a11a',
          amberDark: '#b86b12',
          brown: '#3b2f2f',
          brownDark: '#241b1b',
          green: '#19ff6b',
          greenDark: '#0fb44a',
          soot: '#120e0e'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'system-ui', 'sans-serif']
      },
      animation: {
        flame: 'flame-steps 1s steps(6) infinite',
        embers: 'embers 3s linear infinite',
        type: 'typewriter 2s steps(24) 1 both'
      },
      keyframes: {
        'flame-steps': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' }
        },
        embers: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(-12px) translateX(2px)', opacity: '0.4' },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: '0.8' }
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}
