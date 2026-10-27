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
        // Nexa Hub Services — taken from the logo: jet-black "NEXA" wordmark,
        // flame-orange "HUB", and the violet → blue → red → magenta flame mark.
        ink: {
          DEFAULT: '#14111F',   // headings, dark sections, footer
          700:     '#211C33',   // raised surfaces on dark bg
          600:     '#2E2847',
          950:     '#0A0812',   // deepest bg (contact band)
        },
        brand: {
          DEFAULT: '#F26200',   // primary buttons, links, icons ("HUB" orange)
          dark:    '#D14E00',   // hover
          light:   '#FFF1E6',   // tinted backgrounds / chips
        },
        mist:   '#F7F5FB',      // soft section panels
        sun:    '#FFAA1C',      // accent highlights (flame tip amber)
        flame:  '#FF2E1F',      // flame red
        berry:  '#E8065F',      // right arrow magenta
        violet: '#5A23D1',      // left arrow violet
        sky:    '#0AA2F5',      // inner petal cyan-blue
        azure:  '#0A5CE0',      // stem blue
      },
      fontFamily: {
        sans:    ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Saira', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':    'linear-gradient(120deg, #FF9A00 0%, #F26200 45%, #FF2E1F 100%)',
        'spectrum-gradient': 'linear-gradient(90deg, #5A23D1 0%, #0A5CE0 25%, #0AA2F5 42%, #FF9A00 62%, #FF2E1F 80%, #E8065F 100%)',
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
        'soft':  '0 8px 30px -12px rgba(20, 17, 31, 0.12)',
        'card':  '0 1px 2px rgba(20, 17, 31, 0.06), 0 12px 28px -16px rgba(20, 17, 31, 0.22)',
        'lift':  '0 24px 48px -20px rgba(58, 28, 113, 0.5)',
        'glow':  '0 10px 30px -10px rgba(242, 98, 0, 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
