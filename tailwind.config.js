module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        accent: '#F59E0B',
        'emotion-joy': '#FCD34D',
        'emotion-sadness': '#60A5FA',
        'emotion-hopeful': '#34D399',
        'emotion-melancholy': '#A78BFA',
        'emotion-angry': '#F87171',
        'emotion-peaceful': '#C7D2FE',
        'emotion-nostalgic': '#FDBCB4',
        'emotion-inspired': '#BBF7D0',
        'emotion-lost': '#BFDBFE',
        'emotion-grateful': '#FEE2E2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-warm':
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cool':
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      animation: {
        'heart-pop': 'heartPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        heartPop: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
