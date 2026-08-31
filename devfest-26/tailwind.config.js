/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08090b',
        'bg-alt': '#101216',
        'df-text': '#f5f5f7',
        'text-dim': '#8d8f96',
        'text-dimmer': '#5a5c62',
        'g-blue': '#4285F4',
        'g-red': '#EA4335',
        'g-yellow': '#FBBC05',
        'g-green': '#34A853',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'df': '14px',
      },
      animation: {
        'pulse-dot': 'pulseDot 2.4s ease-out infinite',
        'shimmer': 'shimmer 7s linear infinite',
        'twinkle': 'twinkle 4.5s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'skyline-in': 'skylineIn 1.3s cubic-bezier(.16,1,.3,1) 0.8s forwards',
      },
      keyframes: {
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(52,168,83,0.55)' },
          '70%': { boxShadow: '0 0 0 9px rgba(52,168,83,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(52,168,83,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        skylineIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
