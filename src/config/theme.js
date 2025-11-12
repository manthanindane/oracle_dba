// ============================================
// THEME CONFIGURATION - Orange Accent #FA3C16
// ============================================

export const themeConfig = {
  // Brand Colors - Orange Accent
  brand: {
    primary: {
      DEFAULT: '#FA3C16',
      light: '#FB6145',
      dark: '#E8350F',
      50: '#FEF2F0',
      100: '#FEE5E1',
      200: '#FCCBC3',
      300: '#FAB1A5',
      400: '#F97787',
      500: '#FA3C16',
      600: '#E8350F',
      700: '#C62D0C',
      800: '#A32509',
      900: '#811D07',
    },
    secondary: '#FA3C16', // Same orange
    accent: '#FA3C16',
  },

  // Light Theme Colors
  light: {
    bg: '#ffffff',
    surface: '#f9fafb',
    card: '#ffffff',
    border: '#e5e7eb',
    hover: '#f3f4f6',
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
    }
  },

  // Dark Theme Colors
  dark: {
    bg: '#0a0a0a',
    surface: '#111111',
    card: '#1a1a1a',
    border: '#2a2a2a',
    hover: '#222222',
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      tertiary: '#9ca3af',
    }
  },

  // Typography
  fonts: {
    sans: '"Plus Jakarta Sans", system-ui, sans-serif',
    mono: '"Fira Code", monospace',
  },

  // Spacing & Sizing
  spacing: {
    navbar: '5rem',
    sidebar: '24rem',
    container: '80rem',
  },

  // Border Radius
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },

  // Transitions
  transitions: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  }
}
