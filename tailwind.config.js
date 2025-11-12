import { themeConfig } from './src/config/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors from config
        brand: {
          primary: themeConfig.brand.primary,
          secondary: themeConfig.brand.secondary,
          accent: themeConfig.brand.accent,
        },
        // Alias for backward compatibility
        oracle: {
          red: themeConfig.brand.primary, // Now blue
          gold: themeConfig.brand.secondary,
        },
        // Theme colors
        light: themeConfig.light,
        dark: themeConfig.dark,
      },
      fontFamily: {
        sans: [themeConfig.fonts.sans],
        mono: [themeConfig.fonts.mono],
      },
      spacing: {
        'navbar': themeConfig.spacing.navbar,
        'sidebar': themeConfig.spacing.sidebar,
        'container': themeConfig.spacing.container,
      },
      borderRadius: themeConfig.radius,
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
