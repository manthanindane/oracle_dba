import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-light-surface dark:bg-dark-card border-2 border-light-border dark:border-dark-border hover:border-oracle-red transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Light Mode) */}
      <Sun 
        className={`absolute w-5 h-5 text-oracle-red transition-all duration-500 ${
          theme === 'light' 
            ? 'rotate-0 scale-100 opacity-100' 
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      
      {/* Moon Icon (Dark Mode) */}
      <Moon 
        className={`absolute w-5 h-5 text-oracle-gold transition-all duration-500 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100 opacity-100' 
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />

      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-oracle-red/20 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
    </button>
  )
}

export default ThemeToggle
