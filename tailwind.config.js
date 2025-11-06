/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#1a1a1a',
          border: '#2a2a2a',
          hover: '#222222',
        },
        accent: {
          purple: '#a78bfa',
          pink: '#f472b6',
          cyan: '#22d3ee',
          emerald: '#34d399',
        },
        oracle: {
          red: {
            DEFAULT: '#C74634',
            light: '#E05840',
            dark: '#A63928',
            50: '#FCE8E5',
            100: '#F9D1CB',
            200: '#F3A397',
            300: '#ED7563',
            400: '#E7472F',
            500: '#C74634',
            600: '#9F3829',
            700: '#772A1F',
            800: '#4F1C14',
            900: '#270E0A',
          },
          bark: {
            DEFAULT: '#312D2A',
            light: '#4A4540',
            dark: '#1F1C1A',
          },
          gray: {
            DEFAULT: '#7F7F7F',
            light: '#CBCECE',
          },
          gold: '#FACD62',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Shadcn animations
        'in': 'in 0.2s ease-out',
        'out': 'out 0.2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(199, 70, 52, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(199, 70, 52, 0.8)' },
        },
        // Shadcn animations
        in: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        out: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
