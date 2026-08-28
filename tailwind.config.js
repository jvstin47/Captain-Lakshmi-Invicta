/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          newsprint: '#f7f4ed',
          paper: '#f3efe6',
          cream: '#eae3d2',
          sand: '#dfd5c0',
          tan: '#c9bda4',
          sepia: '#8c7d67',
          ink: '#1c1917',
          deepInk: '#12100e',
          charcoal: '#262320',
          slate: '#363430',
        },
        khaki: {
          light: '#656b5b',
          DEFAULT: '#474c3e',
          dark: '#303429',
        },
        terracotta: {
          light: '#b85448',
          DEFAULT: '#913b30',
          dark: '#6e271f',
        },
        bronze: {
          light: '#dfab94',
          DEFAULT: '#c08269',
          dark: '#935843',
          glow: 'rgba(192, 130, 105, 0.22)',
        },
        rosegold: {
          light: '#e8b8a5',
          DEFAULT: '#c68a73',
          dark: '#995a45',
        }
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        news: ['"Libre Baskerville"', 'serif'],
        mono: ['"Courier Prime"', '"Space Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
