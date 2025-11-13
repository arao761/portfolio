/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern neutral palette for light mode
        light: {
          bg: {
            primary: '#ffffff',
            secondary: '#fafafa',
            tertiary: '#f5f5f5',
          },
          text: {
            primary: '#0a0a0a',
            secondary: '#525252',
            tertiary: '#737373',
          },
          border: '#e5e5e5',
        },
        // Sophisticated dark mode palette
        dark: {
          bg: {
            primary: '#0a0a0a',
            secondary: '#121212',
            tertiary: '#1a1a1a',
          },
          text: {
            primary: '#ffffff',
            secondary: '#a3a3a3',
            tertiary: '#737373',
          },
          border: '#262626',
        },
        // Accent colors - elegant and subtle
        accent: {
          primary: '#18181b',    // Sophisticated dark for light mode
          secondary: '#ffffff',  // Clean white for dark mode
          purple: '#a855f7',
          blue: '#3b82f6',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'typing': 'typing 3.5s steps(40, end)',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
