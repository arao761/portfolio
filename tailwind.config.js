/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#faf9f7',
          dark: '#111110',
        },
        ink: {
          DEFAULT: '#1c1b1a',
          secondary: '#57534e',
          tertiary: '#a8a29e',
          dark: '#e7e5e4',
          'dark-secondary': '#a8a29e',
          'dark-tertiary': '#6b6661',
        },
        rule: {
          DEFAULT: '#e7e2dc',
          dark: '#2a2826',
        },
        accent: {
          DEFAULT: '#b45309',
          dark: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        column: '42rem',
      },
    },
  },
  plugins: [],
}
