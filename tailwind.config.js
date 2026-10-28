/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F2EC',
          deep: '#ECE8E0',
          card: '#FBFAF7',
        },
        ink: {
          DEFAULT: '#18181B',
          soft: '#3F3F46',
          muted: '#6B6A70',
          faint: '#9C9AA0',
        },
        line: {
          DEFAULT: '#DCD7CC',
          strong: '#C4BEB1',
        },
        accent: {
          DEFAULT: '#2E48D4',
          hover: '#2238B0',
          soft: '#E4E8FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
      },
      letterSpacing: {
        label: '0.14em',
      },
    },
  },
  plugins: [],
};
