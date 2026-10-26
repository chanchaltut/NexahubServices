/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      height: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)',
      },
      minHeight: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)',
      },
      colors: {
        // Nexa Hub Services — Deep Ink + Emerald Teal, with a warm Sun accent.
        // Swap these values once the final logo colours are confirmed.
        ink: {
          DEFAULT: '#0E2A33',   // headings, dark sections, footer
          700:     '#163A45',   // raised surfaces on dark bg
          600:     '#1E4A57',
          950:     '#071A20',   // deepest bg (contact band)
        },
        brand: {
          DEFAULT: '#22A38B',   // primary buttons, links, icons
          dark:    '#1B8A75',   // hover
          light:   '#E6F5F1',   // tinted backgrounds / chips
        },
        mist:  '#EEF3F1',       // soft section panels
        sun:   '#F5B841',       // accent highlights
      },
      fontFamily: {
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.7s ease-out forwards',
        'float-slow':  'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft':  '0 8px 30px -12px rgba(14, 42, 51, 0.12)',
        'glow':  '0 10px 30px -10px rgba(34, 163, 139, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
