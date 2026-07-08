@tailwind components;

@theme {
  extend: {
    colors: {
      brand: { DEFAULT: '#00Å676', light: '#69F0AE', dark: '#00C853' },
      surface: { DEFAULT: '#1A1B2E', light: '#2A2B3E', dark: '#0F0F1A' },
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out',
      'slide-up': 'slideUp 0.5s ease-out',
      'pulse-glow': 'pulseGlow 2s infinite',
    },
    keyframes: {
      fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      pulseGlow: { '0%, 100%': { boxShadow: '0 0 20px rgba(0,230,118,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(0,230,118,0.6)' } },
    },
  },
  plugins: [],
}