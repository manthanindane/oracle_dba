import { themeConfig } from '../config/theme'
import { useTheme } from '../context/ThemeContext'

export const useThemeConfig = () => {
  const { theme } = useTheme()
  
  const colors = {
    brand: themeConfig.brand,
    current: theme === 'dark' ? themeConfig.dark : themeConfig.light,
  }
  
  const getColor = (path) => {
    const keys = path.split('.')
    let value = theme === 'dark' ? themeConfig.dark : themeConfig.light
    
    for (const key of keys) {
      value = value[key]
      if (value === undefined) return null
    }
    
    return value
  }
  
  return {
    theme,
    colors,
    fonts: themeConfig.fonts,
    spacing: themeConfig.spacing,
    radius: themeConfig.radius,
    getColor,
  }
}
